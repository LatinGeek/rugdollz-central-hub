import { useApi } from '@/app/utils/api'
import { User } from '@/types/Entities/user'
import { UserRole } from '@/types/enums/user-role'

export function useAuthService() {
  const { get, post } = useApi()

  const getUserData = async (address: string) => {
    const { data, error } = await get<User>(`/auth/user/${address}`, {
      requireAuth: true
    })
    console.log('data', data);
    if (error) {
      console.error('Error fetching user data:', error)
      return null
    }

    return data
  }

  const createGuestUser = async (address: string) => {
    const guestUser: Partial<User> = {
      address,
      role: UserRole.guest,
      points: 0,
      achievements: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    const { data, error } = await post<User>('/auth/user', guestUser, {
      requireAuth: true
    })

    if (error) {
      console.error('Error creating guest user:', error)
      return null
    }

    return data
  }

  return {
    getUserData,
    createGuestUser
  }
} 