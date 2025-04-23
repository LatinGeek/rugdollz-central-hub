'use client'

import { useState } from 'react'
import Image from 'next/image'
import { format } from 'date-fns'

interface Note {
  id: string
  content: string
  author: string
  createdAt: string
}

interface User {
  id: string
  username: string
  walletAddress: string
}

interface NFT {
  id: string
  name: string
  imageUrl: string
  collection: string
}

interface Purchase {
  id: string
  title: string
  description: string
  nft: NFT
  buyer: User
  status: 'pending' | 'completed' | 'cancelled'
  purchaseDate: string
  price: number
  transactionHash: string
  notes: Note[]
}

interface PurchaseDetailsInteractiveProps {
  initialPurchase: Purchase
}

export function PurchaseDetailsInteractive({ initialPurchase }: PurchaseDetailsInteractiveProps) {
  const [purchase, setPurchase] = useState<Purchase>(initialPurchase)
  const [newNote, setNewNote] = useState('')
  const [status, setStatus] = useState(initialPurchase.status)

  const handleStatusChange = (newStatus: Purchase['status']) => {
    setStatus(newStatus)
    setPurchase(prev => ({
      ...prev,
      status: newStatus,
      notes: [
        ...prev.notes,
        {
          id: Date.now().toString(),
          content: `Status changed to ${newStatus}`,
          author: 'Admin',
          createdAt: new Date().toISOString()
        }
      ]
    }))
  }

  const handleAddNote = () => {
    if (!newNote.trim()) return

    setPurchase(prev => ({
      ...prev,
      notes: [
        ...prev.notes,
        {
          id: Date.now().toString(),
          content: newNote,
          author: 'Admin',
          createdAt: new Date().toISOString()
        }
      ]
    }))
    setNewNote('')
  }

  return (
    <div className="space-y-6">
      {/* Purchase Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold text-[rgb(var(--text-primary))] mb-4">{purchase.title}</h2>
          <p className="text-[rgb(var(--text-secondary))] mb-4">{purchase.description}</p>
          
          <div className="space-y-2">
            <p className="text-[rgb(var(--text-secondary))]">
              <span className="font-semibold">Status:</span>{' '}
              <span className={`capitalize ${
                status === 'completed' ? 'text-green-500' :
                status === 'cancelled' ? 'text-red-500' :
                'text-yellow-500'
              }`}>
                {status}
              </span>
            </p>
            <p className="text-[rgb(var(--text-secondary))]">
              <span className="font-semibold">Purchase Date:</span>{' '}
              {format(new Date(purchase.purchaseDate), 'PPP')}
            </p>
            <p className="text-[rgb(var(--text-secondary))]">
              <span className="font-semibold">Price:</span>{' '}
              {purchase.price}
            </p>
            <p className="text-[rgb(var(--text-secondary))]">
              <span className="font-semibold">Transaction Hash:</span>{' '}
              <a 
                href={`https://etherscan.io/tx/${purchase.transactionHash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[rgb(var(--primary-orange))] hover:underline"
              >
                {purchase.transactionHash}
              </a>
            </p>
          </div>
        </div>

        <div className="relative h-64 md:h-auto">
          <Image
            src={purchase.nft.imageUrl}
            alt={purchase.nft.name}
            fill
            className="object-contain rounded-lg"
          />
        </div>
      </div>

      {/* Buyer and Seller Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[rgb(var(--bg-light))] rounded-lg p-4">
          <h3 className="text-lg font-semibold text-[rgb(var(--text-primary))] mb-2">Buyer</h3>
          <p className="text-[rgb(var(--text-secondary))]">{purchase.buyer.username}</p>
          <p className="text-[rgb(var(--text-secondary))] text-sm">{purchase.buyer.walletAddress}</p>
        </div>

      </div>

      {/* Status Management */}
      <div className="bg-[rgb(var(--bg-light))] rounded-lg p-4">
        <h3 className="text-lg font-semibold text-[rgb(var(--text-primary))] mb-4">Status Management</h3>
        <div className="flex gap-4">
          <button
            onClick={() => handleStatusChange('pending')}
            className={`px-4 py-2 rounded-md ${
              status === 'pending'
                ? 'bg-yellow-500 text-white'
                : 'bg-[rgb(var(--bg-dark))] text-[rgb(var(--text-secondary))]'
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => handleStatusChange('completed')}
            className={`px-4 py-2 rounded-md ${
              status === 'completed'
                ? 'bg-green-500 text-white'
                : 'bg-[rgb(var(--bg-dark))] text-[rgb(var(--text-secondary))]'
            }`}
          >
            Completed
          </button>
          <button
            onClick={() => handleStatusChange('cancelled')}
            className={`px-4 py-2 rounded-md ${
              status === 'cancelled'
                ? 'bg-red-500 text-white'
                : 'bg-[rgb(var(--bg-dark))] text-[rgb(var(--text-secondary))]'
            }`}
          >
            Cancelled
          </button>
        </div>
      </div>

      {/* Notes Section */}
      <div className="bg-[rgb(var(--bg-light))] rounded-lg p-4">
        <h3 className="text-lg font-semibold text-[rgb(var(--text-primary))] mb-4">Notes</h3>
        
        <div className="space-y-4 mb-4">
          {purchase.notes.map((note) => (
            <div key={note.id} className="bg-[rgb(var(--bg-dark))] rounded-lg p-3">
              <p className="text-[rgb(var(--text-secondary))]">{note.content}</p>
              <p className="text-sm text-[rgb(var(--text-secondary))] mt-2">
                {note.author} • {format(new Date(note.createdAt), 'PPp')}
              </p>
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Add a note..."
            className="flex-1 bg-[rgb(var(--bg-dark))] text-[rgb(var(--text-primary))] rounded-md px-3 py-2"
          />
          <button
            onClick={handleAddNote}
            className="bg-[rgb(var(--primary-orange))] text-white px-4 py-2 rounded-md hover:bg-[rgb(var(--primary-orange))]/90"
          >
            Add Note
          </button>
        </div>
      </div>
    </div>
  )
} 