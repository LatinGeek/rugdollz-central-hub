'use client'

import { useState } from 'react'
import { NFT } from '@/types/Entities/nft'
import { LoadingSpinner } from '../ui/LoadingSpinner'

interface WriteLoreProps {
  nft: NFT
  onClose: () => void
  onSubmit: (content: string) => void
  isSubmitting?: boolean
}

export function WriteLore({ nft, onClose, onSubmit, isSubmitting = false }: WriteLoreProps) {
  const [content, setContent] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!content.trim() || isSubmitting) return
    onSubmit(content.trim())
  }

  return (
    <div className="bg-[rgb(var(--bg-lighter))] rounded-lg p-6">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-start gap-4">
          <img
            src={nft.imageUrl}
            alt={nft.name}
            className="w-16 h-16 rounded-lg object-cover bg-[rgb(var(--bg-dark))]"
          />
          <div>
            <h3 className="text-lg font-semibold text-[rgb(var(--text-primary))]">{nft.name}</h3>
            <p className="text-sm text-[rgb(var(--text-secondary))]">{nft.collection}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))] transition-colors"
        >
          ✕
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="lore-content" className="block text-sm font-medium text-[rgb(var(--text-primary))] mb-2">
            Write your lore
          </label>
          <textarea
            id="lore-content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Share the story behind this NFT..."
            className="w-full h-32 p-3 bg-[rgb(var(--bg-dark))] text-[rgb(var(--text-primary))] rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary-orange))]"
            disabled={isSubmitting}
          />
        </div>
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))] transition-colors"
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={!content.trim() || isSubmitting}
            className="px-4 py-2 bg-[rgb(var(--primary-orange))] text-white rounded-lg hover:bg-[rgb(var(--primary-dark))] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <LoadingSpinner className="w-4 h-4" />
                Submitting...
              </>
            ) : (
              'Submit'
            )}
          </button>
        </div>
      </form>
    </div>
  )
} 