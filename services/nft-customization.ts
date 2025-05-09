import { NFTLayerCategoryDetails } from '@/types/FormattedData/nft-layer-category-details';
import { useApi } from '@/app/utils/api';

export function useNFTCustomizationService() {
  const api = useApi();

  const getNFTLayerCategoryDetails = async (): Promise<NFTLayerCategoryDetails[]> => {
    try {
      const { data, error } = await api.get<NFTLayerCategoryDetails[]>('/nft-customization');
      
      if (error) {
        throw new Error(error);
      }

      return data || [];
    } catch (error) {
      console.error('Error fetching NFT layer category details:', error);
      throw error;
    }
  };

  return {
    getNFTLayerCategoryDetails,
  };
} 