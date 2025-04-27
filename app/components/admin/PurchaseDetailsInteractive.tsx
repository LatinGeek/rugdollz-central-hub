'use client'

import { useState } from 'react'
import { PurchaseDetails } from '@/types/FormattedData/purchase-details'
import { OrderStatusType } from '@/types/enums/order-status';
import { Note } from '@/types/Entities/note';
import { PurchaseDetailsComponent } from './PurchaseDetailsComponent';
import { NoteDetails } from '@/types/FormattedData/note-details';

interface PurchaseDetailsInteractiveProps {
  purchaseDetails: PurchaseDetails;
}

export function PurchaseDetailsInteractive({ purchaseDetails }: PurchaseDetailsInteractiveProps) {
  const [purchase, setPurchase] = useState<PurchaseDetails>(purchaseDetails)
  const [newNote, setNewNote] = useState('')

  const handleStatusChange = (status: OrderStatusType) => {
    console.log(purchase);
    purchase.purchase.status = status;
    setPurchase({...purchase});
  }

  const handleAddNote = () => {
    if (!newNote.trim()) return

    const note: Note = {
      id: Date.now().toString(),
      content: newNote,
      createdAt: new Date().toISOString(),
      userId: purchase.buyer.id
    }

    const noteDetails: NoteDetails = {
      note: note,
      user: purchase.buyer
    }

    setPurchase(current => ({
      ...current,
      notes: [noteDetails, ...current.notes]
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