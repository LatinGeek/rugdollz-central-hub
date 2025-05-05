import { useApi } from '@/app/utils/api'
import { NFT } from '@/types/Entities/nft'

export function useNFTService() {
  const { get } = useApi()

  const getNFTs = async (owner?: string, collection?: string) => {
    let endpoint = '/nft'
    if (owner) {
      endpoint += `?owner=${owner}`
    } else if (collection) {
      endpoint += `?collection=${collection}`
    }

    const { data, error } = await get<NFT[]>(endpoint, {
      requireAuth: false
    })

    if (error) {
      console.error('Error fetching NFTs:', error)
      return []
    }

    return data || []
  }

  const getUserNFTs = async (address: string) => {
    return getNFTs(address)
  }

  const getCollectionNFTs = async (collection: string) => {
    return getNFTs(undefined, collection)
  }

  return {
    getNFTs,
    getUserNFTs,
    getCollectionNFTs
  }
} 