'use client'

import { useState } from 'react'
import Image from 'next/image'
import { PurchaseDetails } from '@/types/FormattedData/purchase-details'
import { OrderStatusType } from '@/types/enums/order-status'
import { PlaceholderImage } from '../PlaceholderImage'

interface PurchaseListProps {
  purchases: PurchaseDetails[]
  onStatusChange: (purchaseId: string, newStatus: OrderStatusType) => void
  onTitleClick: (purchaseId: string) => void
}

export function PurchaseList({ purchases, onStatusChange, onTitleClick }: PurchaseListProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())
  console.log(purchases);
  const filteredPurchases = purchases.filter(purchase =>
    purchase.buyer.username?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    purchase.item.name.toLowerCase().includes(searchQuery.toLowerCase())
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

  const handleImageError = (imageUrl: string) => {
    setImageErrors(prev => new Set([...prev, imageUrl]))
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
            key={purchase.purchase.id}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-[rgb(var(--bg-darker))] rounded-lg"
          >
            {/* NFT Image */}
            <div className="relative w-16 h-16 flex-shrink-0">
              {imageErrors.has(purchase.item.imageUrl) ? (
                <PlaceholderImage category={purchase.item.category} className="w-full h-full rounded-lg" />
              ) : (
                <Image
                  src={purchase.item.imageUrl}
                  alt={purchase.item.name}
                  fill
                  className="object-cover rounded-lg"
                  onError={() => handleImageError(purchase.item.imageUrl)}
                />
              )}
            </div>

            {/* Purchase Details */}
            <div className="flex-1 min-w-0">
              <h3 
                className="text-lg font-medium text-[rgb(var(--text-primary))] truncate cursor-pointer hover:text-[rgb(var(--primary-orange))] transition-colors"
                onClick={() => onTitleClick(purchase.purchase.id)}
              >
                {purchase.item.name}
              </h3>
              <p className="text-sm text-[rgb(var(--text-secondary))]">
                Buyer: {purchase.buyer.username ?? 'N/A'}
              </p>
              <p className="text-sm text-[rgb(var(--text-secondary))]">
                Price: {purchase.purchase.price} {purchase.purchase.paymentMethod}
              </p>
              <p className="text-sm text-[rgb(var(--text-secondary))]">
                Date: {new Date(purchase.purchase.purchaseDate).toLocaleDateString()}
              </p>
            </div>

            {/* Status Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(purchase.purchase.status)}`}>
                {purchase.purchase.status.charAt(0).toUpperCase() + purchase.purchase.status.slice(1)}
              </div>
              
              <select
                value={purchase.purchase.status}
                onChange={(e) => onStatusChange(purchase.purchase.id, e.target.value as 'pending' | 'delivered' | 'cancelled')}
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