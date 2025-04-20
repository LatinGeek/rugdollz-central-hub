'use client'

import Image from 'next/image'
import { SendHorizonal } from 'lucide-react'

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
      {/* Raffle Header */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* NFT Image */}
        <div className="relative w-full md:w-64 h-64 flex-shrink-0">
          <Image
            src={raffle.nft.imageUrl}
            alt={raffle.nft.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Raffle Info */}
        <div className="flex-1 space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-[rgb(var(--text-primary))]">
                {raffle.title}
              </h2>
              <p className="text-[rgb(var(--text-secondary))] mt-1">
                {raffle.description}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <select
                value={raffle.status}
                onChange={(e) => onStatusChange(e.target.value as 'pending' | 'delivered' | 'cancelled')}
                className="bg-[rgb(var(--bg-dark))] text-[rgb(var(--text-primary))] border border-[rgb(var(--border-dark))] rounded-lg px-3 py-1 text-sm"
              >
                <option value="pending">Pending</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-medium text-[rgb(var(--text-primary))] mb-2">Raffle Details</h3>
              <div className="space-y-2 text-sm text-[rgb(var(--text-secondary))]">
                <p>Start Date: {new Date(raffle.startDate).toLocaleDateString()}</p>
                <p>End Date: {new Date(raffle.endDate).toLocaleDateString()}</p>
                <p>Ticket Price: {raffle.ticketPrice} ETH</p>
                <p>Tickets Sold: {raffle.soldTickets} / {raffle.totalTickets}</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-[rgb(var(--text-primary))] mb-2">Winner Details</h3>
              <div className="space-y-2 text-sm text-[rgb(var(--text-secondary))]">
                <p>Username: {raffle.winner.username}</p>
                <p>Wallet: {raffle.winner.walletAddress}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notes Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-[rgb(var(--text-primary))]">Admin Notes</h3>
        
        {/* Add Note Form */}
        <div className="flex gap-4">
          <input
            type="text"
            value={newNote}
            onChange={(e) => onNoteChange(e.target.value)}
            placeholder="Add a note..."
            className="w-full sm:w-1/2 flex-1 sm:flex-none text-sm bg-[rgb(var(--bg-dark))] text-[rgb(var(--text-primary))] border border-[rgb(var(--border-dark))] rounded-lg px-3 py-2"
          />
          <button
            onClick={onAddNote}
            className="px-0 py-2 text-4xl bg-[rgb(var(--accent))] text-white rounded-lg hover:bg-[rgb(var(--accent-dark))]"
          >
            <SendHorizonal></SendHorizonal>
          </button>
        </div>

        {/* Notes List */}
        <div className="space-y-4">
          {raffle.notes.map(note => (
            <div
              key={note.id}
              className="p-4 bg-[rgb(var(--bg-darker))] rounded-lg"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm font-medium text-[rgb(var(--text-primary))]">
                  {note.author}
                </span>
                <span className="text-xs text-[rgb(var(--text-secondary))]">
                  {new Date(note.createdAt).toLocaleString()}
                </span>
              </div>
              <p className="text-sm text-[rgb(var(--text-secondary))]">
                {note.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 