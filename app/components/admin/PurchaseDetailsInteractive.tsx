'use client'

import { useState } from 'react'
import { PurchaseDetails } from '@/types/FormattedData/purchase-details'
import { OrderStatusType } from '@/types/enums/order-status';
import { Note } from '@/types/Entities/note';
import { PurchaseDetailsComponent } from './PurchaseDetailsComponent';

interface PurchaseDetailsInteractiveProps {
  purchaseDetails: PurchaseDetails;
}

export function PurchaseDetailsInteractive({ purchaseDetails }: PurchaseDetailsInteractiveProps) {
  const [purchase, setPurchase] = useState(purchaseDetails)
  const [newNote, setNewNote] = useState('')

  const handleStatusChange = (status: OrderStatusType) => {
    setPurchase(current => ({ ...current, status }))
  }

  const handleAddNote = () => {
    if (!newNote.trim()) return

    const note: Note = {
      id: Date.now().toString(),
      content: newNote,
      createdAt: new Date().toISOString(),
      userId: purchase.buyer.id
    }

    setPurchase(current => ({
      ...current,
      notes: [note, ...current.notes]
    }))
    setNewNote('')
  }

  return (
    <PurchaseDetailsComponent 
      purchase={purchase}
      onStatusChange={handleStatusChange}
      newNote={newNote}
      onNoteChange={setNewNote}
      onAddNote={handleAddNote}
    />
  )
} 