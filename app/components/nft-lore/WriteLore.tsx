'use client'

import { useState } from 'react'

interface NFT {
  id: string
  name: string
  imageUrl: string
  collection: string
}

interface WriteLoreProps {
  nft: NFT
  onClose: () => void
  onSubmit: (content: string) => void
}

export function WriteLore({ nft, onClose, onSubmit }: WriteLoreProps) {
  const [content, setContent] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!content.trim()) return

    setIsSubmitting(true)
    try {
      await onSubmit(content)
      setContent('')
      onClose()
    } catch (error) {
      console.error('Failed to submit lore:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-[rgb(var(--bg-primary))] rounded-lg p-6 shadow-lg">
      <div className="flex items-start space-x-4 mb-6">
        <img
          src={nft.imageUrl}
          alt={nft.name}
          className="w-16 h-16 rounded-lg object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold text-[rgb(var(--text-primary))]">{nft.name}</h3>
          <p className="text-sm text-[rgb(var(--text-secondary))]">{nft.collection}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="lore-content" className="block text-sm font-medium text-[rgb(var(--text-primary))] mb-2">
            Write your lore
          </label>
          <textarea
            id="lore-content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Share the story behind this NFT..."
            className="w-full h-32 p-3 rounded-lg bg-[rgb(var(--bg-secondary))] text-[rgb(var(--text-primary))] border border-[rgb(var(--border))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))]"
            required
          />
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))]"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting || !content.trim()}
            className="px-4 py-2 text-sm font-medium text-white bg-[rgb(var(--accent))] rounded-lg hover:bg-[rgb(var(--accent-dark))] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Lore'}
          </button>
        </div>
      </form>
    </div>
  )
} 