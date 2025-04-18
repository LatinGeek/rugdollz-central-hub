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
    <div className="flex items-center gap-4 p-4 bg-[rgb(var(--bg-dark))] rounded-lg">
      <PlaceholderImage category="user" className="w-12 h-12" />
      <div className="flex-1">
        <p className="font-semibold text-[rgb(var(--text-primary))]">{user.name}</p>
        <div className="flex gap-4 text-sm">
          <span className="text-[rgb(var(--text-secondary))]">{user.points} pts</span>
          <span className="text-[rgb(var(--text-secondary))]">{user.nfts} NFTs</span>
          <span className="text-[rgb(var(--text-secondary))]">{user.achievements} achievements</span>
        </div>
      </div>
    </div>
  )
} 