import { useApi } from '@/app/utils/api';
import { LoreEntryDetails } from '@/types/FormattedData/lore-entry-details';

export function useLoreService() {
  const { get } = useApi();

  const getUserLoreEntries = async (userId: string): Promise<LoreEntryDetails[] | null> => {
    try {
      const { data, error } = await get<LoreEntryDetails[]>(`/lore?userId=${userId}`, {
        requireAuth: true
      });

      if (error) {
        console.error('Error fetching lore entries:', error);
        return null;
      }

      return data || null;
    } catch (error) {
      console.error('Error in getUserLoreEntries:', error);
      return null;
    }
  };

  return {
    getUserLoreEntries
  };
} 