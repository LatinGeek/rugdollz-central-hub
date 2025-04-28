import { useApi } from '@/app/utils/api'
import { UserProfileData } from '@/types/FormattedData/user-profile-data'

export function useProfileService() {
  const { get } = useApi()

  const getProfile = async (address: string) => {
    const { data, error } = await get<UserProfileData>(`/users/profile/${address}`, {
      requireAuth: false
    })

    if (error) {
      console.error('Error fetching profile:', error)
      return null
    }

    return data
  }

  return {
    getProfile
  }
} 