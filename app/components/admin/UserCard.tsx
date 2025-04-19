'use client'

import { PlaceholderImage } from '@/app/components/PlaceholderImage'

interface User {
  id: number
  name: string
  points: number
  nfts: number
  achievements: number
}

interface UserCardProps {
  user: User
}

export function UserCard({ user }: UserCardProps) {
  return (
    <div className="flex items-center gap-3 py-1.5 px-3 bg-[rgb(var(--bg-dark))] rounded-lg">
      <div className="w-20 h-20">
        <PlaceholderImage 
          category="User" 
        />
      </div>
      <div className="flex-1">
        <p className="font-semibold text-[rgb(var(--text-primary))] text-sm">{user.name}</p>
        <div className="flex gap-3 text-xs">
          <span className="text-[rgb(var(--text-secondary))]">{user.points} pts</span>
          <span className="text-[rgb(var(--text-secondary))]">{user.nfts} NFTs</span>
          <span className="text-[rgb(var(--text-secondary))]">{user.achievements} achievements</span>
        </div>
      </div>
    </div>
  )
} 