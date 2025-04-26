'use client'

import { use } from 'react'
import { ProfileHeader } from '@/app/components/profile/ProfileHeader'
import { Badges } from '@/app/components/profile/Badges'
import { Highlights } from '@/app/components/profile/Highlights'
import { sampleNFTs } from '@/types/nft'
import { sampleBadgeDetails } from '@/types/FormattedData/badge-details'

interface ProfilePageProps {
  params: Promise<{
    address: string
  }>
}

export default function ProfilePage({ params }: ProfilePageProps) {
  // Unwrap the params Promise using React.use()
  const { address } = use(params)

  return (
    <div className="min-h-screen bg-[rgb(var(--bg-darker))]">
      <ProfileHeader walletAddress={address} username="LatinGeek"/>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Badges badges={sampleBadgeDetails} />
        </div>
        <div>
          <Highlights nfts={sampleNFTs} />
        </div>
      </div>
    </div>
  )
} 