'use client'

import { useState } from 'react'
import { RaffleFeed } from '@/app/components/raffle/RaffleFeed'
import { PurchaseConfirmDialog } from '@/app/components/ui/PurchaseConfirmDialog'
import { Raffle, sampleRaffles } from '@/types/Entities/raffle'
import { sampleRaffleDetails } from '@/types/FormattedData/raffle-details'


export default function RaffleDiscoveryPage() {
  const [joinedRaffles, setJoinedRaffles] = useState<string[]>([])
  const [selectedRaffle, setSelectedRaffle] = useState<Raffle | null>(null)
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
          raffles={sampleRaffleDetails}
          joinedRaffles={joinedRaffles}
          onJoin={handleJoinRaffle}
        />
      </div>

      {selectedRaffle && (
        <PurchaseConfirmDialog
          isOpen={!!selectedRaffle}
          onClose={() => setSelectedRaffle(null)}
          onConfirm={handleConfirmPurchase}
          itemName={`Raffle Ticket: ${selectedRaffle.name}`}
          itemPrice={selectedRaffle.ticketPrice}
          currentBalance={currentBalance}
        />
      )}
    </div>
  )
} 