import { StoreItem } from '@/types/Entities/store-item'
import { useApi } from '@/app/utils/api'

export function usePurchaseService() {
  const api = useApi()

  const createPurchase = async (item: StoreItem, txHash: string) => {
    try {
      const { data, error } = await api.post('/purchase', {
        itemId: item.id,
        name: item.name,
        description: item.description,
        price: item.price,
        imageUrl: item.imageUrl,
        category: item.category,
        txHash,
      })
      if (error) {
        throw new Error(error)
      }
      return data
    } catch (error) {
      console.error('Error creating purchase:', error)
      throw error
    }
  }

  return {
    createPurchase,
  }
} 