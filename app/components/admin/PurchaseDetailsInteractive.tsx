'use client'

import { useState } from 'react'
import { PurchaseDetails } from './PurchaseDetails'

interface PurchaseDetailsInteractiveProps {
  initialPurchase: {
    id: string
    title: string
    description: string
    nft: {
      id: string
      name: string
      imageUrl: string
      collection: string
    }
    buyer: {
      id: string
      username: string
      walletAddress: string
    }
    status: 'pending' | 'delivered' | 'cancelled'
    purchaseDate: string
    price: number
    paymentMethod: string
    transactionHash: string
    notes: {
      id: string
      content: string
      author: string
      createdAt: string
    }[]
  }
}

export function PurchaseDetailsInteractive({ initialPurchase }: PurchaseDetailsInteractiveProps) {
  const [purchase, setPurchase] = useState(initialPurchase)
  const [newNote, setNewNote] = useState('')

  const handleStatusChange = (status: 'pending' | 'delivered' | 'cancelled') => {
    setPurchase(current => ({ ...current, status }))
  }

  const handleAddNote = () => {
    if (!newNote.trim()) return

    const note = {
      id: Date.now().toString(),
      content: newNote,
      author: 'Admin',
      createdAt: new Date().toISOString()
    }

    setPurchase(current => ({
      ...current,
      notes: [note, ...current.notes]
    }))
    setNewNote('')
  }

  return (
    <PurchaseDetails 
      purchase={purchase}
      onStatusChange={handleStatusChange}
      newNote={newNote}
      onNoteChange={setNewNote}
      onAddNote={handleAddNote}
    />
  )
} 