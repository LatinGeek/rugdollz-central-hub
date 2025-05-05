import { BadgeDetails } from '@/types/FormattedData/badge-details';
import { useApi } from '@/app/utils/api';

export function useBadgeService() {
  const api = useApi();

  const getBadgeDetails = async (): Promise<BadgeDetails[]> => {
    try {
      const { data, error } = await api.get<{ badgeDetails: BadgeDetails[] }>('/badges');
      
      if (error) {
        throw new Error(error);
      }

      return data?.badgeDetails || [];
    } catch (error) {
      console.error('Error fetching badge details:', error);
      throw error;
    }
  };

  return {
    getBadgeDetails,
  };
} 