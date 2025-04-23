'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { PurchaseList } from '@/app/components/admin/PurchaseList'

// Sample data - Replace with actual data fetching
const samplePurchases = [
  {
    id: '1',
    title: 'Tome of Eternal Flames',
    description: 'Purchase of a rare RugDollz OG NFT',
    nft: {
      id: '1',
      name: 'Tome of Eternal Flames',
      imageUrl: '/images/sample-nfts/nft-1.png',
      collection: 'RugDollz'
    },
    buyer: 'LoreKeeper_42',
    seller: 'OriginalOwner',
    price: 0.5,
    status: 'pending' as const,
    purchaseDate: '2024-03-20T10:30:00Z',
    paymentMethod: 'ETH',
    transactionHash: '0xabc...def',
    notes: [
      {
        id: '1',
        content: 'Purchase initiated',
        author: 'Admin',
        createdAt: '2024-03-20T10:30:00Z'
      }
    ]
  },
  {
    id: '2',
    title: 'Tome of the Forbidden Arts',
    description: 'Purchase of a legendary RugDollz NFT',
    nft: {
      id: '2',
      name: 'Tome of the Forbidden Arts',
      imageUrl: '/images/sample-nfts/nft-2.png',
      collection: 'RugDollz'
    },
    buyer: 'MysticScribe',
    seller: 'AncientOne',
    price: 0.75,
    status: 'delivered' as const,
    purchaseDate: '2024-03-19T15:45:00Z',
    paymentMethod: 'ETH',
    transactionHash: '0xdef...ghi',
    notes: [
      {
        id: '1',
        content: 'Purchase completed',
        author: 'Admin',
        createdAt: '2024-03-19T15:45:00Z'
      }
    ]
  },
  {
    id: '3',
    title: 'Tome of the Earths Veins',
    description: 'Purchase of a mystical RugDollz NFT',
    nft: {
      id: '3',
      name: 'Tome of the Earths Veins',
      imageUrl: '/images/sample-nfts/nft-3.png',
      collection: 'RugDollz'
    },
    buyer: 'EarthWalker',
    seller: 'NatureKeeper',
    price: 0.6,
    status: 'cancelled' as const,
    purchaseDate: '2024-03-18T09:15:00Z',
    paymentMethod: 'ETH',
    transactionHash: '0x123...456',
    notes: [
      {
        id: '1',
        content: 'Purchase cancelled',
        author: 'Admin',
        createdAt: '2024-03-18T09:15:00Z'
      }
    ]
  }
]

export default function PurchaseManagementPage() {
  const router = useRouter()
  const [purchases, setPurchases] = useState(samplePurchases)

  const handleStatusChange = (purchaseId: string, newStatus: 'pending' | 'delivered' | 'cancelled') => {
    setPurchases(currentPurchases =>
      currentPurchases.map(purchase =>
        purchase.id === purchaseId
          ? { ...purchase, status: newStatus }
          : purchase
      )
    )
  }

  const handleTitleClick = (purchaseId: string) => {
    router.push(`/purchase-details/${purchaseId}`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[rgb(var(--text-primary))] mb-8">
        Purchase Management
      </h1>
      
      <div className="bg-[rgb(var(--bg-dark))] rounded-lg p-6">
        <PurchaseList 
          purchases={purchases} 
          onStatusChange={handleStatusChange}
          onTitleClick={handleTitleClick}
        />
      </div>
    </div>
  )
} 