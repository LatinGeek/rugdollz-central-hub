'use client'

import { useState } from 'react'
import { RaffleDetails } from './RaffleDetails'

interface RaffleDetailsInteractiveProps {
  initialRaffle: {
    id: string
    title: string
    description: string
    nft: {
      id: string
      name: string
      imageUrl: string
      collection: string
    }
    winner: {
      id: string
      username: string
      walletAddress: string
    }
    status: 'pending' | 'delivered' | 'cancelled'
    startDate: string
    endDate: string
    ticketPrice: number
    totalTickets: number
    soldTickets: number
    notes: {
      id: string
      content: string
      author: string
      createdAt: string
    }[]
  }
}

export function RaffleDetailsInteractive({ initialRaffle }: RaffleDetailsInteractiveProps) {
  const [raffle, setRaffle] = useState(initialRaffle)
  const [newNote, setNewNote] = useState('')

  const handleStatusChange = (status: 'pending' | 'delivered' | 'cancelled') => {
    setRaffle(current => ({ ...current, status }))
  }

  const handleAddNote = () => {
    if (!newNote.trim()) return

    const note = {
      id: Date.now().toString(),
      content: newNote,
      author: 'Admin',
      createdAt: new Date().toISOString()
    }

    setRaffle(current => ({
      ...current,
      notes: [note, ...current.notes]
    }))
    setNewNote('')
  }

  return (
    <RaffleDetails 
      raffle={raffle}
      onStatusChange={handleStatusChange}
      newNote={newNote}
      onNoteChange={setNewNote}
      onAddNote={handleAddNote}
    />
  )
} 