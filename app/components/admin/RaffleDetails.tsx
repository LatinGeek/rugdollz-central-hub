'use client'

import { Notes } from './Notes'
import { TransactionInfo } from './TransactionInfo'

interface NFT {
  id: string
  name: string
  imageUrl: string
  collection: string
}

interface Winner {
  id: string
  username: string
  walletAddress: string
}

interface Note {
  id: string
  content: string
  author: string
  createdAt: string
}

interface Raffle {
  id: string
  title: string
  description: string
  nft: NFT
  winner: Winner
  status: 'pending' | 'delivered' | 'cancelled'
  startDate: string
  endDate: string
  ticketPrice: number
  totalTickets: number
  soldTickets: number
  notes: Note[]
}

interface RaffleDetailsProps {
  raffle: Raffle
  onStatusChange: (status: 'pending' | 'delivered' | 'cancelled') => void
  newNote: string
  onNoteChange: (note: string) => void
  onAddNote: () => void
}

export function RaffleDetails({
  raffle,
  onStatusChange,
  newNote,
  onNoteChange,
  onAddNote
}: RaffleDetailsProps) {
  return (
    <div className="space-y-8">
      <TransactionInfo
        title={raffle.title}
        description={raffle.description}
        nft={raffle.nft}
        status={raffle.status}
        onStatusChange={onStatusChange}
        details={[
          {
            label: 'Raffle Details',
            details: [
              { label: 'Start Date', value: raffle.startDate, format: 'date' },
              { label: 'End Date', value: raffle.endDate, format: 'date' },
              { label: 'Ticket Price', value: raffle.ticketPrice, format: 'currency' },
              { label: 'Tickets Sold', value: `${raffle.soldTickets} / ${raffle.totalTickets}`, format: 'text' }
            ]
          },
          {
            label: 'Winner Details',
            details: [
              { label: 'Username', value: raffle.winner.username },
              { label: 'Wallet', value: raffle.winner.walletAddress }
            ]
          }
        ]}
      />

      {/* Notes Section */}
      <Notes
        notes={raffle.notes}
        newNote={newNote}
        onNoteChange={onNoteChange}
        onAddNote={onAddNote}
      />
    </div>
  )
} 