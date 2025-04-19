'use client'

import { useState } from 'react'
import { RaffleDetails } from '@/app/components/admin/RaffleDetails'

// Sample data - Replace with actual data fetching
const sampleRaffle = {
  id: '1',
  title: 'Tome of Eternal Flames Raffle',
  description: 'Win this legendary tome containing ancient knowledge of fire magic',
  nft: {
    id: '1',
    name: 'Tome of Eternal Flames',
    imageUrl: '/images/sample-nfts/nft-1.png',
    collection: 'RugDollz'
  },
  winner: {
    id: '1',
    username: 'LoreKeeper_42',
    walletAddress: '0x123...456'
  },
  status: 'pending',
  startDate: '2024-03-15T00:00:00Z',
  endDate: '2024-03-20T00:00:00Z',
  ticketPrice: 0.1,
  totalTickets: 100,
  soldTickets: 85,
  notes: [
    {
      id: '1',
      content: 'Winner has been notified via email',
      author: 'Admin',
      createdAt: '2024-03-20T10:30:00Z'
    },
    {
      id: '2',
      content: 'Waiting for winner to confirm wallet address',
      author: 'Admin',
      createdAt: '2024-03-20T11:45:00Z'
    }
  ]
}

export default function RaffleDetailsPage() {
  const [raffle, setRaffle] = useState(sampleRaffle)
  const [newNote, setNewNote] = useState('')

  const handleStatusChange = (newStatus: 'pending' | 'delivered' | 'cancelled') => {
    setRaffle(current => ({ ...current, status: newStatus }))
  }

  const handleAddNote = () => {
    if (!newNote.trim()) return

    const note = {
      id: Date.now().toString(),
      content: newNote,
      author: 'Admin', // Replace with actual admin name
      createdAt: new Date().toISOString()
    }

    setRaffle(current => ({
      ...current,
      notes: [note, ...current.notes]
    }))
    setNewNote('')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[rgb(var(--text-primary))] mb-8">
        Raffle Details
      </h1>
      
      <div className="bg-[rgb(var(--bg-dark))] rounded-lg p-6">
        <RaffleDetails 
          raffle={{ ...raffle, status: raffle.status as 'pending' | 'delivered' | 'cancelled' }}
          onStatusChange={handleStatusChange}
          newNote={newNote}
          onNoteChange={setNewNote}
          onAddNote={handleAddNote}
        />
      </div>
    </div>
  )
} 