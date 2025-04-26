'use client'

import { useState } from 'react'
import { PurchaseConfirmDialog } from '../components/ui/PurchaseConfirmDialog'
import { sampleStoreItems, StoreItem } from '@/types/Entities/store-item'
import { StoreItemComponent } from '../components/StoreItemComponent'



export default function StorePage() {
  const [selectedItem, setSelectedItem] = useState<StoreItem | null>(null)
  const [currentBalance] = useState(5000) // This would come from your wallet/backend

  const storeItems = sampleStoreItems;
  
  const handlePurchase = (item: StoreItem) => {
    setSelectedItem(item)
  }

  const handleConfirmPurchase = () => {
    // Here you would handle the actual purchase logic
    console.log('Purchasing item:', selectedItem)
    setSelectedItem(null)
  }

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
            <StoreItemComponent 
              key={item.id} 
              {...item} 
              onPurchase={() => handlePurchase(item)}
            />
          ))}
        </div>
      </div>

      {selectedItem && (
        <PurchaseConfirmDialog
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          onConfirm={handleConfirmPurchase}
          itemName={selectedItem.name}
          itemPrice={selectedItem.price}
          currentBalance={currentBalance}
        />
      )}
    </div>
  )
} 