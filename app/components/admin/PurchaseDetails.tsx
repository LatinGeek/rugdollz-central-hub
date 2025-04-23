'use client'

import { PurchaseDetailsInteractive } from './PurchaseDetailsInteractive'

interface NFT {
  id: string
  name: string
  imageUrl: string
  collection: string
}

interface User {
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

interface Purchase {
  id: string
  title: string
  description: string
  nft: NFT
  buyer: User
  seller: User
  status: 'pending' | 'completed' | 'cancelled'
  purchaseDate: string
  price: number
  paymentMethod: string
  transactionHash: string
  notes: Note[]
}

interface PurchaseDetailsProps {
  purchase: Purchase
  onStatusChange: (status: 'pending' | 'completed' | 'cancelled') => void
  newNote: string
  onNoteChange: (note: string) => void
  onAddNote: () => void
}

export function PurchaseDetails({
  purchase,
  onStatusChange,
  newNote,
  onNoteChange,
  onAddNote
}: PurchaseDetailsProps) {
  return (
    <PurchaseDetailsInteractive 
      initialPurchase={purchase}
    />
  )
} 