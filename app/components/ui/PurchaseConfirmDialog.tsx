'use client'

import { Modal } from '@/app/components/ui/Modal'

interface PurchaseConfirmDialogProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  itemName: string
  itemPrice: number
  currentBalance: number
}

export function PurchaseConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  itemName,
  itemPrice,
  currentBalance,
}: PurchaseConfirmDialogProps) {
  const newBalance = currentBalance - itemPrice
  const canAfford = currentBalance >= itemPrice

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Confirm Purchase"
    >
      <div className="space-y-4">
        <div className="bg-[rgb(var(--bg-light))] p-4 rounded-lg">
          <h3 className="text-lg font-medium text-[rgb(var(--text-primary))] mb-2">
            {itemName}
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-[rgb(var(--text-secondary))]">Current Balance:</span>
              <span className="text-[rgb(var(--text-primary))]">{currentBalance} $RUGZ</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[rgb(var(--text-secondary))]">Item Price:</span>
              <span className="text-red-500">-{itemPrice} $RUGZ</span>
            </div>
            <div className="flex justify-between text-sm font-medium">
              <span className="text-[rgb(var(--text-secondary))]">New Balance:</span>
              <span className={newBalance < 0 ? 'text-red-500' : 'text-[rgb(var(--text-primary))]'}>
                {newBalance} $RUGZ
              </span>
            </div>
          </div>
        </div>

        {!canAfford && (
          <p className="text-red-500 text-sm">
            Insufficient balance. You need {itemPrice - currentBalance} more $RUGZ to make this purchase.
          </p>
        )}

        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-[rgb(var(--text-primary))] hover:text-[rgb(var(--text-secondary))]"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={!canAfford}
            className={`px-4 py-2 text-sm font-medium text-white rounded-lg ${
              canAfford 
                ? 'bg-[rgb(var(--primary-orange))] hover:bg-[rgb(var(--primary-orange))]/90' 
                : 'bg-gray-500 cursor-not-allowed'
            }`}
          >
            Confirm Purchase
          </button>
        </div>
      </div>
    </Modal>
  )
} 