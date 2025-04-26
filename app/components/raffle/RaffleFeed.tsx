'use client'

import { RaffleCard } from './RaffleCard'
import { RaffleDetails } from '@/types/FormattedData/raffle-details'


interface RaffleFeedProps {
  raffles: RaffleDetails[]
  joinedRaffles: string[]
  onJoin: (raffleId: string) => void
}

export function RaffleFeed({ raffles, joinedRaffles, onJoin }: RaffleFeedProps) {
  return (
    <div className="space-y-4">
      {raffles.map(raffle => (
        <RaffleCard
          key={raffle.raffle.id}
          raffleDetails={raffle}
          onJoin={onJoin}
          isJoined={joinedRaffles.includes(raffle.raffle.id)}
        />
      ))}
    </div>
  )
} 