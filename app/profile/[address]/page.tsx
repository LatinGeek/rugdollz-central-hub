'use client'

import { useEffect, useState, use } from 'react'
import { ProfileHeader } from '@/app/components/profile/ProfileHeader'
import { Badges } from '@/app/components/profile/Badges'
import { Highlights } from '@/app/components/profile/Highlights'
import { LoadingSpinner } from '@/app/components/ui/LoadingSpinner'
import { useProfileService } from '@/services/profile'
import { UserProfileData } from '@/types/FormattedData/user-profile-data'

interface ProfilePageProps {
  params: Promise<{
    address: string
  }>
}

export default function ProfilePage({ params }: ProfilePageProps) {
  const { address } = use(params)
  const { getProfile } = useProfileService()
  const [profile, setProfile] = useState<UserProfileData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        console.log('fetching profile')
        const data = await getProfile(address)
        if (data !== undefined) {
          setProfile(data)
        } else {
          setProfile(null)
        }
      } catch (err) {
        setError('Failed to load profile')
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProfile()
  }, [address])

  if (isLoading) {
    return <LoadingSpinner fullScreen />;
  }

  if (error || !profile) {
    return (
      <div className="min-h-screen bg-[rgb(var(--bg-darker))] flex items-center justify-center">
        <div className="text-[rgb(var(--text-primary))]">{error || 'Profile not found'}</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[rgb(var(--bg-darker))]">
      <ProfileHeader 
        walletAddress={profile.user?.address ?? ''} 
        username={profile.user?.username ?? ''}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Badges badges={profile.badges} />
        </div>
        <div>
          <Highlights nfts={profile.nfts} />
        </div>
      </div>
    </div>
  )
} 