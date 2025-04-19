'use client'

import { Modal } from '@/app/components/ui/Modal'

interface DeleteLoreEntryDialogProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  entryTitle: string
}

export function DeleteLoreEntryDialog({
  isOpen,
  onClose,
  onConfirm,
  entryTitle
}: DeleteLoreEntryDialogProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Delete Lore Entry"
    >
      <div className="space-y-4">
        <p>
          Are you sure you want to delete the lore entry for "{entryTitle}"?
          This action cannot be undone.
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
            Delete
          </button>
        </div>
      </div>
    </Modal>
  )
} 