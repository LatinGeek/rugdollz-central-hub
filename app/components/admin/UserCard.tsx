'use client'

import { PlaceholderImage } from '@/app/components/PlaceholderImage'
import { UserDetails } from '@/types/FormattedData/user-details'

interface UserCardProps {
  userDetails: UserDetails
}

export function UserCard({ userDetails }: UserCardProps) {
  return (
    <div className="flex items-center gap-3 py-1.5 px-3 bg-[rgb(var(--bg-dark))] rounded-lg">
      <div className="w-20 h-20">
        <PlaceholderImage 
          category="User" 
        />
      </div>
      <div className="flex-1">
        <p className="font-semibold text-[rgb(var(--text-primary))] text-sm">{userDetails.username}</p>
        <div className="flex gap-3 text-xs">
          <span className="text-[rgb(var(--text-secondary))]">{userDetails.points} pts</span>
          <span className="text-[rgb(var(--text-secondary))]">{userDetails.nfts.length} NFTs</span>
          <span className="text-[rgb(var(--text-secondary))]">{userDetails.achievements.length} achievements</span>
        </div>
      </div>
    </div>
  )
} 