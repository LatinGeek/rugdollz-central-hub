import { StoreItem } from '@/types/Entities/store-item'
import { useApi } from '@/app/utils/api'

export const useStoreService = () => {
  const api = useApi()

  const getStoreItems = async (): Promise<StoreItem[]> => {
    const { data, error } = await api.get<StoreItem[]>('/store', {requireAuth: false})
    if (error) throw new Error(error)
    return data || []
  }

  const purchaseItem = async (itemId: string): Promise<void> => {
    const { error } = await api.post<void, { itemId: string }>('/store/purchase', { itemId })
    if (error) throw new Error(error)
  }

  return {
    getStoreItems,
    purchaseItem
  }
} 