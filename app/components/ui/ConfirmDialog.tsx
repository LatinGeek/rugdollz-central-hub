'use client'

import { Modal } from '@/app/components/ui/Modal'

interface ConfirmDialogProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  description: string,
  title: string,
  action: string
}

export function ConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  description,
  title,
  action,
}: ConfirmDialogProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
    >
      <div className="space-y-4">
        <p>
          {description}
        </p>

        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-[rgb(var(--text-primary))] hover:text-[rgb(var(--text-secondary))]"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700"
          >
            {action}
          </button>
        </div>
      </div>
    </Modal>
  )
} 