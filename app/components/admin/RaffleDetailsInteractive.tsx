'use client'

import { useState } from 'react'
import { RaffleDetailsComponent } from './RaffleDetailsComponent'
import { OrderStatusType } from '@/types/enums/order-status'
import { RaffleDetails } from '@/types/FormattedData/raffle-details'
import { Note } from '@/types/Entities/note'
import { NoteDetails } from '@/types/FormattedData/note-details'
import { sampleUserDetails } from '@/types/FormattedData/user-details'

interface RaffleDetailsInteractiveProps {
  initialRaffle: RaffleDetails
  isAdmin: boolean
}

export function RaffleDetailsInteractive({ initialRaffle, isAdmin }: RaffleDetailsInteractiveProps) {
  const [raffle, setRaffle] = useState<RaffleDetails>(initialRaffle)
  const [newNote, setNewNote] = useState('')
  const userJoined = false;

  const handleStatusChange = (status: OrderStatusType) => {
    raffle.raffle.raffleStatus = status;
  }

  const handleAddNote = () => {
    if (!newNote.trim()) return

    const note: Note= {
      id: "1",
      content: newNote,
      userId: '12312312',
      createdAt: new Date().toISOString()
    }

    const noteDetails: NoteDetails = {
      note: note,
      user: sampleUserDetails[0]
    }

    setRaffle(current => ({
      ...current,
      notes: [noteDetails, ...current.notes]
    }))
    setNewNote('')
  }

  const handleJoin = () => {

  }

  return (
    <RaffleDetailsComponent 
      raffle={raffle}
      onStatusChange={handleStatusChange}
      newNote={newNote}
      onNoteChange={setNewNote}
      onAddNote={handleAddNote}
      showStatusChange={isAdmin}
      showNoteAddition={isAdmin}
      showNotes={isAdmin}
      onJoin={handleJoin}
      userJoined={userJoined}
    />
  )
} 