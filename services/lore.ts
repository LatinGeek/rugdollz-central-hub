import { useApi } from '@/app/utils/api';
import { LoreEntryDetails } from '@/types/FormattedData/lore-entry-details';
import { LoreEntry } from '@/types/Entities/lore-entry';

interface CreateLoreEntryData {
  title: string;
  content: string;
  nftId: string;
}

interface VoteResponse {
  votes: number;
}

interface VoteRequest {
  voteValue: 1 | -1 | null;
}

export function useLoreService() {
  const { get, post } = useApi();

  const getAllLoreEntries = async (limit: number = 50): Promise<LoreEntryDetails[] | null> => {
    try {
      const { data, error } = await get<LoreEntryDetails[]>(`/lore?limit=${limit}`,{requireAuth: false}
      );

      if (error) {
        console.error('Error fetching all lore entries:', error);
        return null;
      }

      // Sort by most recent if data exists
      if (data) {
        return data.sort((a, b) => {
          const dateA = new Date(a.loreEntry.createdAt);
          const dateB = new Date(b.loreEntry.createdAt);
          return dateB.getTime() - dateA.getTime();
        });
      }

      return [];
    } catch (error) {
      console.error('Error in getAllLoreEntries:', error);
      return null;
    }
  };

  const getUserLoreEntries = async (userId: string): Promise<LoreEntryDetails[] | null> => {
    try {
      const { data, error } = await get<LoreEntryDetails[]>(`/lore?userId=${userId}`, {
        requireAuth: true
      });

      if (error) {
        console.error('Error fetching lore entries:', error);
        return null;
      }

      return data ?? [];
    } catch (error) {
      console.error('Error in getUserLoreEntries:', error);
      return null;
    }
  };

  const createLoreEntry = async (entryData: CreateLoreEntryData): Promise<LoreEntry | null> => {
    try {
      const { data, error } = await post<{ data: LoreEntry }, CreateLoreEntryData>(
        '/lore',
        entryData,
        { requireAuth: true }
      );

      if (error) {
        console.error('Error creating lore entry:', error);
        throw new Error(error);
      }

      return data?.data ?? null;
    } catch (error) {
      console.error('Error in createLoreEntry:', error);
      throw error;
    }
  };

  const voteLoreEntry = async (loreEntryId: string, voteValue: 1 | -1 | null): Promise<number | null> => {
    try {
      const requestBody: VoteRequest = { voteValue };
      const { data, error } = await post<VoteResponse, VoteRequest>(
        `/lore/vote/${loreEntryId}`,
        requestBody,
        { 
          requireAuth: true,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      if (error) {
        console.error('Error voting on lore entry:', error);
        return null;
      }

      return data?.votes ?? null;
    } catch (error) {
      console.error('Error in voteLoreEntry:', error);
      return null;
    }
  };

  return {
    getAllLoreEntries,
    getUserLoreEntries,
    createLoreEntry,
    voteLoreEntry
  };
} 