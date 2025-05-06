import { LoreEntry } from '@/types/Entities/lore-entry';
import { collections, FirestoreDoc, QueryCondition, OrderByOption, queryCollection, unwrapFirestoreDoc } from '../db';
import { FieldValue } from 'firebase-admin/firestore';
import { LoreEntryDetails } from '@/types/FormattedData/lore-entry-details';
import { User } from '@/types/Entities/user';
import { NFT } from '@/types/Entities/nft';
import { UserDetails } from '@/types/FormattedData/user-details';
import { ActivityName } from '@/types/enums/activity-name';
import { ActivityAction } from '@/types/enums/activity-action';
import { getFilteredActivities } from './activities';

export async function createLoreEntry(entryData: Omit<LoreEntry, 'id'>): Promise<LoreEntry> {
  try {
    // First create the document to get the ID
    const docRef = await collections.loreEntries.add({
      ...entryData,
      createdAt: new Date(),
      updatedAt: new Date(),
      votes: 0
    });

    // Then update the document to include its own ID
    await docRef.update({
      id: docRef.id
    });
    
    const newEntry = await docRef.get();
    return unwrapFirestoreDoc({ id: newEntry.id, ...newEntry.data() } as FirestoreDoc<LoreEntry>);
  } catch (error) {
    throw new Error(`Failed to create lore entry: ${error}`);
  }
}

export async function updateLoreEntry(id: string, entryData: Partial<LoreEntry>): Promise<LoreEntry> {
  try {
    const docRef = collections.loreEntries.doc(id);
    await docRef.update({
      ...entryData,
      updatedAt: new Date()
    });
    
    const updatedEntry = await docRef.get();
    return unwrapFirestoreDoc({ id: updatedEntry.id, ...updatedEntry.data() } as FirestoreDoc<LoreEntry>);
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

export async function getLoreEntryById(id: string): Promise<LoreEntry | null> {
  try {
    const doc = await collections.loreEntries.doc(id).get();
    if (!doc.exists) return null;
    return unwrapFirestoreDoc({ id: doc.id, ...doc.data() } as FirestoreDoc<LoreEntry>);
  } catch (error) {
    throw new Error(`Failed to get lore entry: ${error}`);
  }
}

export async function listLoreEntries(
  conditions?: QueryCondition<FirestoreDoc<LoreEntry>>[],
  orderBy?: OrderByOption<FirestoreDoc<LoreEntry>>,
  limit?: number
): Promise<LoreEntry[]> {
  try {
    const entries = await queryCollection(collections.loreEntries, conditions, orderBy, limit);
    return entries.map(entry => unwrapFirestoreDoc(entry));
  } catch (error) {
    throw new Error(`Failed to list lore entries: ${error}`);
  }
}

export async function getLoreEntriesByNFT(nftId: string): Promise<LoreEntry[]> {
  try {
    const entries = await queryCollection<FirestoreDoc<LoreEntry>>(
      collections.loreEntries,
      [{ field: 'nftId', operator: '==', value: nftId }],
      { field: 'createdAt', direction: 'desc' }
    );
    return entries.map(entry => unwrapFirestoreDoc(entry));
  } catch (error) {
    throw new Error(`Failed to get lore entries for NFT: ${error}`);
  }
}

export async function getLoreEntriesByAuthor(authorId: string): Promise<LoreEntry[]> {
  try {
    const entries = await queryCollection<FirestoreDoc<LoreEntry>>(
      collections.loreEntries,
      [{ field: 'authorId', operator: '==', value: authorId }],
      { field: 'createdAt', direction: 'desc' }
    );
    return entries.map(entry => unwrapFirestoreDoc(entry));
  } catch (error) {
    throw new Error(`Failed to get lore entries by author: ${error}`);
  }
}

export async function getPopularLoreEntries(limit: number = 10): Promise<LoreEntry[]> {
  try {
    const entries = await queryCollection<FirestoreDoc<LoreEntry>>(
      collections.loreEntries,
      [],
      { field: 'votes', direction: 'desc' },
      limit
    );
    return entries.map(entry => unwrapFirestoreDoc(entry));
  } catch (error) {
    throw new Error(`Failed to get popular lore entries: ${error}`);
  }
}

export async function updateLoreEntryVotes(id: string, voteChange: number): Promise<LoreEntry> {
  try {
    const docRef = collections.loreEntries.doc(id);
    await docRef.update({
      votes: FieldValue.increment(voteChange),
      updatedAt: new Date()
    });
    
    const updatedEntry = await docRef.get();
    return unwrapFirestoreDoc({ id: updatedEntry.id, ...updatedEntry.data() } as FirestoreDoc<LoreEntry>);
  } catch (error) {
    throw new Error(`Failed to update lore entry votes: ${error}`);
  }
}

export async function getLoreEntriesByStatus(status: string): Promise<LoreEntry[]> {
  try {
    const entries = await queryCollection<FirestoreDoc<LoreEntry>>(
      collections.loreEntries,
      [{ field: 'status', operator: '==', value: status }],
      { field: 'createdAt', direction: 'desc' }
    );
    return entries.map(entry => unwrapFirestoreDoc(entry));
  } catch (error) {
    throw new Error(`Failed to get lore entries by status: ${error}`);
  }
}

export async function processVotes(entryId: string): Promise<number> {
  // Get all vote activities for the lore entry
  const voteActivities = await getFilteredActivities({
    type: ActivityName.lore,
    action: ActivityAction.loreEntryVoted,
    loreEntryId: entryId
  });

  // Group activities by user and sort by timestamp
  const userActivitiesMap = new Map<string, typeof voteActivities>();
  voteActivities.forEach(activity => {
    if (activity.voteValue !== undefined && activity.voteValue !== null) {
      const activities = userActivitiesMap.get(activity.userId) || [];
      activities.push(activity);
      activities.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      userActivitiesMap.set(activity.userId, activities);
    }
  });

  // Get only the latest vote from each user
  const latestUserVotes = new Map<string, number>();
  userActivitiesMap.forEach((activities, userId) => {
    const latestActivity = activities[0];
    if (latestActivity?.voteValue !== undefined && latestActivity?.voteValue !== null) {
      latestUserVotes.set(userId, latestActivity.voteValue);
    }
  });

  // Calculate total votes
  const totalVotes = Array.from(latestUserVotes.values()).reduce((sum, vote) => sum + vote, 0);

  // Update the lore entry's vote count in the database
  await updateLoreEntryVotes(entryId, totalVotes);

  return totalVotes;
}

export async function getUserVote(entryId: string, userId: string): Promise<1 | -1 | null> {
  console.log(`[UserVote] Getting vote for entry ${entryId} by user ${userId}`);
  
  try {
    const voteActivities = await getFilteredActivities({
      type: ActivityName.lore,
      action: ActivityAction.loreEntryVoted,
      loreEntryId: entryId
    });
    console.log(`[UserVote] Found ${voteActivities.length} vote activities for entry`);

    // Get the current user's vote (if any)
    const userVoteActivities = voteActivities.filter(activity => activity.userId === userId);
    console.log(`[UserVote] Found ${userVoteActivities.length} vote activities for user`);

    if (userVoteActivities.length === 0) {
      console.log(`[UserVote] No votes found for user ${userId} on entry ${entryId}`);
      return null;
    }

    // Sort by timestamp and get the latest
    const sortedActivities = userVoteActivities.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    const latestVote = sortedActivities[0];
    console.log(`[UserVote] Latest vote for user ${userId}: ${latestVote.voteValue} (from ${latestVote.createdAt})`);

    return latestVote?.voteValue ?? null;
  } catch (error) {
    console.error(`[UserVote] Error getting vote for entry ${entryId} by user ${userId}:`, error);
    return null;
  }
}

export async function getLoreEntryDetailsByUser(userId: string): Promise<LoreEntryDetails[]> {
  try {
    console.log(`[LoreDetails] Fetching lore entries for user: ${userId}`);
    
    // Get all lore entries by the user
    const userEntries = await getLoreEntriesByAuthor(userId);
    console.log(`[LoreDetails] Found ${userEntries.length} entries by user`);
    
    // Get user details
    const userDoc = await collections.users.doc(userId).get();
    if (!userDoc.exists) {
      console.error(`[LoreDetails] User not found: ${userId}`);
      throw new Error('User not found');
    }
    const userData = unwrapFirestoreDoc({ id: userDoc.id, ...userDoc.data() } as FirestoreDoc<User>);
    console.log(`[LoreDetails] Retrieved user data for: ${userData.username || userData.address}`);

    if (!userData.id) {
      console.error(`[LoreDetails] User data is missing ID: ${userId}`);
      throw new Error('User data is missing ID');
    }

    // Get all unique NFT IDs from the entries
    const nftIds = [...new Set(userEntries.map(entry => entry.nftId))];
    console.log(`[LoreDetails] Found ${nftIds.length} unique NFTs to fetch`);
    
    // Fetch all related NFTs
    const nftPromises = nftIds.map(async (nftId) => {
      const nftDoc = await collections.nfts.doc(nftId).get();
      if (!nftDoc.exists) {
        console.warn(`[LoreDetails] NFT not found: ${nftId}`);
      }
      return nftDoc.exists ? { id: nftDoc.id, ...nftDoc.data() } as FirestoreDoc<NFT> : null;
    });
    const nfts = (await Promise.all(nftPromises)).filter((nft): nft is FirestoreDoc<NFT> => nft !== null);
    console.log(`[LoreDetails] Successfully fetched ${nfts.length} NFTs`);

    // Create a map of NFTs for quick lookup
    const nftMap = new Map(nfts.map(nft => [nft.id, nft]));

    // Get user votes for each lore entry
    console.log(`[LoreDetails] Fetching votes for ${userEntries.length} entries`);
    const userVotePromises = userEntries.map(entry => {
      if (!entry.id) {
        console.error(`[LoreDetails] Lore entry is missing ID: ${JSON.stringify(entry)}`);
        throw new Error('Lore entry is missing ID');
      }
      return getUserVote(entry.id, userId);
    });
    const userVotes = await Promise.all(userVotePromises);
    console.log('[LoreDetails] User votes:', userVotes);

    // Combine the data into LoreEntryDetails format
    console.log('[LoreDetails] Combining data into LoreEntryDetails format');
    const loreEntryDetails: LoreEntryDetails[] = userEntries.map((entry, index) => {
      if (!entry.id) {
        console.error(`[LoreDetails] Entry missing ID during mapping: ${JSON.stringify(entry)}`);
        throw new Error('Lore entry is missing ID');
      }

      const nft = nftMap.get(entry.nftId);
      if (!nft || !nft.id) {
        console.error(`[LoreDetails] NFT not found for entry ${entry.id} (NFT ID: ${entry.nftId})`);
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

      return {
        loreEntry: entry,
        userDetails,
        nft: nftDetails,
        userVote: userVotes[index]
      };
    });

    console.log(`[LoreDetails] Successfully created ${loreEntryDetails.length} lore entry details`);
    return loreEntryDetails;
  } catch (error) {
    console.error('[LoreDetails] Error in getLoreEntryDetailsByUser:', error);
    throw new Error(`Failed to get lore entry details by user: ${error}`);
  }
} 