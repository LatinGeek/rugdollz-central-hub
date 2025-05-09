'use client'

import { useState, useEffect } from 'react'
import { PurchaseConfirmDialog } from '../components/ui/PurchaseConfirmDialog'
import { StoreItem } from '@/types/Entities/store-item'
import { StoreItemComponent } from '../components/StoreItemComponent'
import { useStoreService } from '@/services/store'
import { LoadingSpinner } from '@/app/components/ui/LoadingSpinner'

export default function StorePage() {
  const [selectedItem, setSelectedItem] = useState<StoreItem | null>(null)
  const [currentBalance] = useState(5000) // This would come from your wallet/backend
  const [storeItems, setStoreItems] = useState<StoreItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  const { getStoreItems } = useStoreService()

  useEffect(() => {
    const fetchStoreItems = async () => {
      try {
        setIsLoading(true)
        const items = await getStoreItems()
        console.log(items)
        setStoreItems(items)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load store items')
        console.error('Error loading store items:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchStoreItems()
  }, [])
  
  const handlePurchase = (item: StoreItem) => {
    setSelectedItem(item)
  }

  const handleConfirmPurchase = async (hash: string) => {
    if (!selectedItem) return

    try {
      // Here you would update the user's balance and inventory
      console.log('Successfully purchased item:', selectedItem, hash)
      setSelectedItem(null)
    } catch (err) {
      console.error('Error purchasing item:', err)
      // Handle purchase error (show error message to user)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[rgb(var(--bg-darker))] flex items-center justify-center">
        <LoadingSpinner />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[rgb(var(--bg-darker))] flex items-center justify-center">
        <div className="text-[rgb(var(--text-primary))]">{error}</div>
      </div>
    )
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
          onSuccess={handleConfirmPurchase}
          item ={selectedItem}
          currentBalance={currentBalance}
        />
      )}
    </div>
  )
} 