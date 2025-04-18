'use client'

import { StoreItem } from '../components/StoreItem'

// Sample store items data
const storeItems = [
  {
    id: '1',
    name: 'RugDollz Racing Kart',
    description: 'High-performance racing kart for the NFT Race game',
    price: 1000,
    imageUrl: '/images/kart1.png',
    category: 'Game Items'
  },
  {
    id: '2',
    name: 'Rugling Pet',
    description: 'Cute companion pet with special abilities',
    price: 500,
    imageUrl: '/images/rugling1.png',
    category: 'Pets'
  },
  {
    id: '3',
    name: 'Rare Skin Pack',
    description: 'Exclusive character skins for your RugDollz',
    price: 750,
    imageUrl: '/images/skin1.png',
    category: 'Cosmetics'
  },
  {
    id: '4',
    name: 'Power Boost',
    description: 'Temporary power boost for your racing kart',
    price: 250,
    imageUrl: '/images/boost1.png',
    category: 'Consumables'
  },
  {
    id: '5',
    name: 'VIP Pass',
    description: 'Access to exclusive events and rewards',
    price: 2000,
    imageUrl: '/images/vip1.png',
    category: 'Membership'
  },
  {
    id: '6',
    name: 'Starter Pack',
    description: 'Beginner bundle with essential items',
    price: 1500,
    imageUrl: '/images/starter1.png',
    category: 'Bundles'
  }
]

export default function StorePage() {
  return (
    <div className="min-h-screen bg-[rgb(var(--bg-darker))] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[rgb(var(--text-primary))]">RugDollz Store</h1>
          <p className="mt-4 text-xl text-[rgb(var(--text-secondary))]">
            Purchase exclusive items with your $RUGZ tokens
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {storeItems.map((item) => (
            <StoreItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
} 