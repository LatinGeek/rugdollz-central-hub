'use client'

import { RaffleCard } from './RaffleCard'

interface Raffle {
  id: string
  title: string
  description: string
  category: string
  startDate: string
  endDate: string
  participants: number
  maxParticipants: number
  status: 'programmed' | 'started' | 'ended'
}

interface RaffleFeedProps {
  raffles: Raffle[]
  joinedRaffles: string[]
  onJoin: (raffleId: string) => void
}

export function RaffleFeed({ raffles, joinedRaffles, onJoin }: RaffleFeedProps) {
  return (
    <div className="space-y-4">
      {raffles.map(raffle => (
        <RaffleCard
          key={raffle.id}
          raffle={raffle}
          onJoin={onJoin}
          isJoined={joinedRaffles.includes(raffle.id)}
        />
      ))}
    </div>
  )
} 