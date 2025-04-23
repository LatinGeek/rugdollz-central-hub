'use client'

import { Notes } from './Notes'
import { TransactionInfo } from './TransactionInfo'

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
  status: 'pending' | 'delivered' | 'cancelled'
  purchaseDate: string
  price: number
  paymentMethod: string
  transactionHash: string
  notes: Note[]
}

interface PurchaseDetailsProps {
  purchase: Purchase
  onStatusChange: (status: 'pending' | 'delivered' | 'cancelled') => void
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
    <div className="space-y-8">
      <TransactionInfo
        title={purchase.title}
        description={purchase.description}
        nft={purchase.nft}
        status={purchase.status}
        onStatusChange={onStatusChange}
        details={[
          {
            label: 'Purchase Details',
            details: [
              { label: 'Purchase Date', value: purchase.purchaseDate, format: 'date' },
              { label: 'Price', value: purchase.price, format: 'currency', currency: purchase.paymentMethod },
              { label: 'Transaction Hash', value: purchase.transactionHash, format: 'text' }
            ]
          },
          {
            label: 'Buyer Details',
            details: [
              { label: 'Username', value: purchase.buyer.username },
              { label: 'Wallet', value: purchase.buyer.walletAddress }
            ]
          },
        ]}
      />

      {/* Notes Section */}
      <Notes
        notes={purchase.notes}
        newNote={newNote}
        onNoteChange={onNoteChange}
        onAddNote={onAddNote}
      />
    </div>
  )
} 