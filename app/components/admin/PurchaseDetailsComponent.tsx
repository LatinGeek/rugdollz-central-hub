'use client'

import { PurchaseDetails } from '@/types/FormattedData/purchase-details'
import { Notes } from './Notes'
import { TransactionInfo } from './TransactionInfo'
import { OrderStatusType } from '@/types/enums/order-status'


interface PurchaseDetailsComponentProps {
  purchase: PurchaseDetails
  onStatusChange: (status: OrderStatusType) => void
  newNote: string
  onNoteChange: (note: string) => void
  onAddNote: () => void
}

export function PurchaseDetailsComponent({
  purchase,
  onStatusChange,
  newNote,
  onNoteChange,
  onAddNote
}: PurchaseDetailsComponentProps) {
  return (
    <div className="space-y-8">
      <TransactionInfo
        showStatusChange={true}
        title={purchase.item.name}
        description={purchase.item.description}
        item={purchase.item}
        status={purchase.purchase.status}
        onStatusChange={onStatusChange}
        details={[
          {
            label: 'Purchase Details',
            details: [
              { label: 'Purchase Date', value: purchase.purchase.purchaseDate.toLocaleString(), format: 'date' },
              { label: 'Price', value: purchase.purchase.price, format: 'currency', currency: purchase.purchase.paymentMethod },
              { label: 'Transaction Hash', value: purchase.purchase.transactionHash, format: 'text' }
            ]
          },
          {
            label: 'Buyer Details',
            details: [
              { label: 'Username', value: purchase.buyer.username ?? 'N/A' },
              { label: 'Wallet', value: purchase.buyer.address }
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
        showNoteAddition={true}
      />
    </div>
  )
} 