'use client'

import { useState } from 'react'
import { RaffleFeed } from '@/app/components/raffle/RaffleFeed'
import { PurchaseConfirmDialog } from '@/app/components/ui/PurchaseConfirmDialog'

// Sample data - Replace with actual data fetching
const sampleRaffles = [
  {
    id: '1',
    title: 'Legendary NFT Bundle',
    description: 'Win a collection of rare NFTs including a one-of-a-kind RugDollz and exclusive game items.',
    category: 'Bundles',
    startDate: '2024-04-20T10:00:00Z',
    endDate: '2025-04-25T10:00:00Z',
    participants: 245,
    maxParticipants: 500,
    status: 'programmed' as const,
    ticketPrice: 100
  },
  {
    id: '2',
    title: 'Racing Kart Upgrade',
    description: 'Get a chance to win a premium racing kart upgrade for your NFT collection.',
    category: 'Game Items',
    startDate: '2024-04-18T00:00:00Z',
    endDate: '2025-04-22T00:00:00Z',
    participants: 189,
    maxParticipants: 300,
    status: 'started' as const,
    ticketPrice: 50
  },
  {
    id: '3',
    title: 'Exclusive Pet Companion',
    description: 'Rare pet companion that gives special abilities in the RugDollz universe.',
    category: 'Pets',
    startDate: '2024-04-15T00:00:00Z',
    endDate: '2025-04-17T00:00:00Z',
    participants: 150,
    maxParticipants: 200,
    status: 'ended' as const,
    ticketPrice: 75,
    winner: {
      id: 'user123',
      name: 'CryptoMaster',
      avatar: 'https://i.pravatar.cc/150?img=3'
    }
  },
  {
    id: '4',
    title: 'Premium Membership',
    description: 'Win a 3-month premium membership with exclusive benefits and early access to new features.',
    category: 'Membership',
    startDate: '2025-05-22T12:00:00Z',
    endDate: '2025-05-29T12:00:00Z',
    participants: 320,
    maxParticipants: 500,
    status: 'programmed' as const,
    ticketPrice: 200
  }
]

export default function RaffleDiscoveryPage() {
  const [joinedRaffles, setJoinedRaffles] = useState<string[]>([])
  const [selectedRaffle, setSelectedRaffle] = useState<typeof sampleRaffles[0] | null>(null)
  const [currentBalance] = useState(5000) // This would come from your wallet/backend

  const handleJoinRaffle = (raffleId: string) => {
    const raffle = sampleRaffles.find(r => r.id === raffleId)
    if (raffle) {
      setSelectedRaffle(raffle)
    }
  }

  const handleConfirmPurchase = () => {
    if (selectedRaffle) {
      // Here you would handle the actual purchase logic
      console.log('Purchasing ticket for raffle:', selectedRaffle)
      setJoinedRaffles(prev => [...prev, selectedRaffle.id])
      setSelectedRaffle(null)
    }
  }

  return (
    <div className="min-h-screen bg-[rgb(var(--bg-darker))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[rgb(var(--text-primary))] mb-2">Raffle Discovery</h1>
          <p className="text-[rgb(var(--text-secondary))]">
            Participate in exciting raffles and win amazing prizes
          </p>
        </div>

        <RaffleFeed
          raffles={sampleRaffles}
          joinedRaffles={joinedRaffles}
          onJoin={handleJoinRaffle}
        />
      </div>

      {selectedRaffle && (
        <PurchaseConfirmDialog
          isOpen={!!selectedRaffle}
          onClose={() => setSelectedRaffle(null)}
          onConfirm={handleConfirmPurchase}
          itemName={`Raffle Ticket: ${selectedRaffle.title}`}
          itemPrice={selectedRaffle.ticketPrice}
          currentBalance={currentBalance}
        />
      )}
    </div>
  )
} 