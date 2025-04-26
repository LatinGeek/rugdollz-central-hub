'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { PurchaseList } from '@/app/components/admin/PurchaseList'
import { samplePurchaseDetails } from '@/types/FormattedData/purchase-details'
import { OrderStatusType } from '@/types/enums/order-status'
export default function PurchaseManagementPage() {
  const router = useRouter()
  const [purchases, setPurchases] = useState(samplePurchaseDetails)

  const handleStatusChange = (purchaseId: string, newStatus: OrderStatusType) => {
    setPurchases(currentPurchases =>
      currentPurchases.map(purchaseDetails =>
        purchaseDetails.purchase.id === purchaseId
          ? { ...purchaseDetails, purchase: { ...purchaseDetails.purchase, status: newStatus } }
          : purchaseDetails
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