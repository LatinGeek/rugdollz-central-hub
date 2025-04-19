'use client'

import { useState } from 'react'
import Image from 'next/image'

interface NFT {
  id: string
  name: string
  imageUrl: string
  collection: string
}

interface Purchase {
  id: string
  nft: NFT
  buyer: string
  price: number
  status: 'pending' | 'delivered' | 'cancelled'
  purchaseDate: string
}

interface PurchaseListProps {
  purchases: Purchase[]
  onStatusChange: (purchaseId: string, newStatus: 'pending' | 'delivered' | 'cancelled') => void
}

export function PurchaseList({ purchases, onStatusChange }: PurchaseListProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPurchases = purchases.filter(purchase =>
    purchase.buyer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    purchase.nft.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-500'
      case 'delivered':
        return 'bg-green-500/20 text-green-500'
      case 'cancelled':
        return 'bg-red-500/20 text-red-500'
      default:
        return 'bg-gray-500/20 text-gray-500'
    }
  }

  return (
    <div className="space-y-6">
      {/* Search Section */}
      <div className="flex items-center gap-4 mb-6">
        <label className="text-sm text-[rgb(var(--text-primary))]">Search:</label>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by buyer or NFT name..."
          className="bg-[rgb(var(--bg-dark))] text-[rgb(var(--text-primary))] border border-[rgb(var(--border-dark))] rounded-lg px-3 py-2 flex-1"
        />
      </div>

      {/* Purchases List */}
      <div className="space-y-4">
        {filteredPurchases.map(purchase => (
          <div
            key={purchase.id}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-[rgb(var(--bg-darker))] rounded-lg"
          >
            {/* NFT Image */}
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image
                src={purchase.nft.imageUrl}
                alt={purchase.nft.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* Purchase Details */}
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-medium text-[rgb(var(--text-primary))] truncate">
                {purchase.nft.name}
              </h3>
              <p className="text-sm text-[rgb(var(--text-secondary))]">
                Buyer: {purchase.buyer}
              </p>
              <p className="text-sm text-[rgb(var(--text-secondary))]">
                Price: {purchase.price} ETH
              </p>
              <p className="text-sm text-[rgb(var(--text-secondary))]">
                Date: {new Date(purchase.purchaseDate).toLocaleDateString()}
              </p>
            </div>

            {/* Status Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(purchase.status)}`}>
                {purchase.status.charAt(0).toUpperCase() + purchase.status.slice(1)}
              </div>
              
              <select
                value={purchase.status}
                onChange={(e) => onStatusChange(purchase.id, e.target.value as 'pending' | 'delivered' | 'cancelled')}
                className="bg-[rgb(var(--bg-dark))] text-[rgb(var(--text-primary))] border border-[rgb(var(--border-dark))] rounded-lg px-3 py-1 text-sm"
              >
                <option value="pending">Pending</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 