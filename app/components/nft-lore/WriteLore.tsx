'use client'

import { useState } from 'react'
import { NFT } from '@/types/Entities/nft'
import { LoadingSpinner } from '../ui/LoadingSpinner'

interface WriteLoreProps {
  nft: NFT
  onClose: () => void
  onSubmit: (content: string) => Promise<void>
  isSubmitting: boolean
}

export function WriteLore({ nft, onClose, onSubmit, isSubmitting }: WriteLoreProps) {
  const [content, setContent] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!content.trim() || isSubmitting) return
    await onSubmit(content)
    setContent('')
  }

  return (
    <div className="bg-[rgb(var(--bg-dark))] rounded-xl p-4 sm:p-6 space-y-4">
      <div className="flex items-start gap-4">
        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden flex-shrink-0">
          <img
            src={nft.imageUrl}
            alt={nft.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-grow">
          <h2 className="text-lg sm:text-xl font-semibold text-[rgb(var(--text-primary))]">{nft.name}</h2>
          <p className="text-sm text-[rgb(var(--text-secondary))]">Write your lore entry below</p>
        </div>

        <button
          onClick={onClose}
          className="text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))] transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
            <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
          </svg>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Share your story..."
          className="w-full h-32 bg-[rgb(var(--bg-darker))] text-[rgb(var(--text-primary))] rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary-orange))]"
          disabled={isSubmitting}
        />

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={!content.trim() || isSubmitting}
            className={`
              flex items-center gap-2 px-6 py-2 rounded-lg
              ${isSubmitting ? 'bg-[rgb(var(--primary-dark))]' : 'bg-[rgb(var(--primary-orange))] hover:bg-[rgb(var(--primary-dark))]'}
              text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed
            `}
          >
            {isSubmitting ? (
              <>
                <LoadingSpinner size="sm" />
                <span>Submitting...</span>
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