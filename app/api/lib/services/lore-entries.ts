import { LoreEntry } from '@/types/Entities/lore-entry';
import { collections, FirestoreDoc, QueryCondition, OrderByOption, queryCollection } from '../db';
import { FieldValue } from 'firebase-admin/firestore';
import { LoreEntryDetails } from '@/types/FormattedData/lore-entry-details';
import { User } from '@/types/Entities/user';
import { NFT } from '@/types/Entities/nft';
import { UserDetails } from '@/types/FormattedData/user-details';
import { ActivityName } from '@/types/enums/activity-name';
import { ActivityAction } from '@/types/enums/activity-action';
import { getFilteredActivities } from './activities';

const unwrapFirestoreDoc = <T>(doc: FirestoreDoc<T>): T => {
  const { ...data } = doc;
  return data as T;
};

export async function createLoreEntry(entryData: Omit<LoreEntry, 'id'>): Promise<FirestoreDoc<LoreEntry>> {
  try {
    const docRef = await collections.loreEntries.add({
      ...entryData,
      createdAt: new Date(),
      updatedAt: new Date(),
      votes: 0
    });
    
    const newEntry = await docRef.get();
    return { id: newEntry.id, ...newEntry.data() } as FirestoreDoc<LoreEntry>;
  } catch (error) {
    throw new Error(`Failed to create lore entry: ${error}`);
  }
}

export async function updateLoreEntry(id: string, entryData: Partial<LoreEntry>): Promise<FirestoreDoc<LoreEntry>> {
  try {
    const docRef = collections.loreEntries.doc(id);
    await docRef.update({
      ...entryData,
      updatedAt: new Date()
    });
    
    const updatedEntry = await docRef.get();
    return { id: updatedEntry.id, ...updatedEntry.data() } as FirestoreDoc<LoreEntry>;
  } catch (error) {
    throw new Error(`Failed to update lore entry: ${error}`);
  }
}

export async function deleteLoreEntry(id: string): Promise<void> {
  try {
    await collections.loreEntries.doc(id).delete();
  } catch (error) {
    throw new Error(`Failed to delete lore entry: ${error}`);
  }
}

export async function getLoreEntryById(id: string): Promise<FirestoreDoc<LoreEntry> | null> {
  try {
    const doc = await collections.loreEntries.doc(id).get();
    if (!doc.exists) return null;
    return { id: doc.id, ...doc.data() } as FirestoreDoc<LoreEntry>;
  } catch (error) {
    throw new Error(`Failed to get lore entry: ${error}`);
  }
}

export async function listLoreEntries(
  conditions?: QueryCondition<FirestoreDoc<LoreEntry>>[],
  orderBy?: OrderByOption<FirestoreDoc<LoreEntry>>,
  limit?: number
): Promise<FirestoreDoc<LoreEntry>[]> {
  try {
    return await queryCollection(collections.loreEntries, conditions, orderBy, limit);
  } catch (error) {
    throw new Error(`Failed to list lore entries: ${error}`);
  }
}

export async function getLoreEntriesByNFT(nftId: string): Promise<FirestoreDoc<LoreEntry>[]> {
  try {
    return await queryCollection(
      collections.loreEntries,
      [{ field: 'nftId', operator: '==', value: nftId }],
      { field: 'createdAt', direction: 'desc' }
    );
  } catch (error) {
    throw new Error(`Failed to get lore entries for NFT: ${error}`);
  }
}

export async function getLoreEntriesByAuthor(authorId: string): Promise<FirestoreDoc<LoreEntry>[]> {
  try {
    return await queryCollection(
      collections.loreEntries,
      [{ field: 'authorId', operator: '==', value: authorId }],
      { field: 'createdAt', direction: 'desc' }
    );
  } catch (error) {
    throw new Error(`Failed to get lore entries by author: ${error}`);
  }
}

export async function getPopularLoreEntries(limit: number = 10): Promise<FirestoreDoc<LoreEntry>[]> {
  try {
    return await queryCollection(
      collections.loreEntries,
      [],
      { field: 'votes', direction: 'desc' },
      limit
    );
  } catch (error) {
    throw new Error(`Failed to get popular lore entries: ${error}`);
  }
}

export async function updateLoreEntryVotes(id: string, voteChange: number): Promise<FirestoreDoc<LoreEntry>> {
  try {
    const docRef = collections.loreEntries.doc(id);
    await docRef.update({
      votes: FieldValue.increment(voteChange),
      updatedAt: new Date()
    });
    
    const updatedEntry = await docRef.get();
    return { id: updatedEntry.id, ...updatedEntry.data() } as FirestoreDoc<LoreEntry>;
  } catch (error) {
    throw new Error(`Failed to update lore entry votes: ${error}`);
  }
}

export async function getLoreEntriesByStatus(status: string): Promise<FirestoreDoc<LoreEntry>[]> {
  try {
    return await queryCollection(
      collections.loreEntries,
      [{ field: 'status', operator: '==', value: status }],
      { field: 'createdAt', direction: 'desc' }
    );
  } catch (error) {
    throw new Error(`Failed to get lore entries by status: ${error}`);
  }
}

export async function getLoreEntryDetailsByUser(userId: string): Promise<LoreEntryDetails[]> {
  try {
    // Get all lore entries by the user
    const userEntries = await getLoreEntriesByAuthor(userId);
    
    // Get user details
    const userDoc = await collections.users.doc(userId).get();
    if (!userDoc.exists) {
      throw new Error('User not found');
    }
    const userData = { id: userDoc.id, ...userDoc.data() } as FirestoreDoc<User>;

    if (!userData.id) {
      throw new Error('User data is missing ID');
    }

    // Get all unique NFT IDs from the entries
    const nftIds = [...new Set(userEntries.map(entry => entry.nftId))];
    
    // Fetch all related NFTs
    const nftPromises = nftIds.map(async (nftId) => {
      const nftDoc = await collections.nfts.doc(nftId).get();
      return nftDoc.exists ? { id: nftDoc.id, ...nftDoc.data() } as FirestoreDoc<NFT> : null;
    });
    const nfts = (await Promise.all(nftPromises)).filter((nft): nft is FirestoreDoc<NFT> => nft !== null);

    // Create a map of NFTs for quick lookup
    const nftMap = new Map(nfts.map(nft => [nft.id, nft]));

    // Get all vote activities for the user's lore entries
    const entryIds = userEntries.map(entry => entry.id!);
    const voteActivities = await Promise.all(
      entryIds.map(async (entryId) => {
        return await getFilteredActivities({
          type: ActivityName.lore,
          action: ActivityAction.loreEntryVoted,
          loreEntryId: entryId
        });
      })
    );

    // Create a map of vote counts and user votes
    const voteMap = new Map<string, { totalVotes: number; userVote: 1 | -1 | null }>();
    
    // Process vote activities for each lore entry
    entryIds.forEach((entryId, index) => {
      const entryVotes = voteActivities[index];
      
      // Get the latest vote from each user
      const latestUserVotes = new Map<string, number>();
      entryVotes.forEach(activity => {
        if (activity.voteValue !== undefined && activity.voteValue !== null) {
          latestUserVotes.set(activity.userId, activity.voteValue);
        }
      });
      
      // Calculate total votes
      const totalVotes = Array.from(latestUserVotes.values()).reduce((sum, vote) => sum + vote, 0);
      
      // Get the current user's vote (if any)
      const userVoteActivity = entryVotes
        .filter(activity => activity.userId === userId)
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())[0];
      
      voteMap.set(entryId, {
        totalVotes,
        userVote: userVoteActivity?.voteValue ?? null
      });
    });

    // Combine the data into LoreEntryDetails format
    const loreEntryDetails: LoreEntryDetails[] = userEntries.map(entry => {
      if (!entry.id) {
        throw new Error('Lore entry is missing ID');
      }

      const nft = nftMap.get(entry.nftId);
      if (!nft || !nft.id) {
        throw new Error(`NFT not found for entry ${entry.id}`);
      }

      const userDetails: UserDetails = {
        id: userData.id!,
        address: userData.address,
        username: userData.username || null,
        avatar: userData.avatar || null,
        points: userData.points || 0,
        nfts: [],
        createdAt: userData.createdAt || null,
        updatedAt: userData.updatedAt || null,
        achievements: []
      };

      // Convert FirestoreDoc<NFT> to NFT
      const nftDetails = unwrapFirestoreDoc(nft);

      // Convert FirestoreDoc<LoreEntry> to LoreEntry
      const loreEntry = unwrapFirestoreDoc(entry);

      // Get vote information
      const voteInfo = voteMap.get(entry.id) || { totalVotes: 0, userVote: null };

      return {
        loreEntry: {
          ...loreEntry,
          votes: voteInfo.totalVotes
        },
        userDetails,
        nft: nftDetails,
        userVote: voteInfo.userVote,
        votes: voteInfo.totalVotes
      };
    });

    return loreEntryDetails;
  } catch (error) {
    throw new Error(`Failed to get lore entry details by user: ${error}`);
  }
} 