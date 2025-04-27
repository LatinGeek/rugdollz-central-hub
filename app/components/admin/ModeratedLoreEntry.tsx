'use client'

import { LoreEntryDetails } from '@/types/FormattedData/lore-entry-details'
import { useState, useRef, useEffect } from 'react'

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

  if (diffInSeconds < 60) {
    return 'just now'
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60)
    return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600)
    return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`
  } else if (diffInSeconds < 2592000) {
    const days = Math.floor(diffInSeconds / 86400)
    return `${days} ${days === 1 ? 'day' : 'days'} ago`
  } else {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }
}



interface ModeratedLoreEntryProps {
  entryDetails: LoreEntryDetails
  onDelete: (entryId: string) => void
}

export function ModeratedLoreEntry({ entryDetails, onDelete }: ModeratedLoreEntryProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [needsTruncation, setNeedsTruncation] = useState(false)
  const contentRef = useRef<HTMLParagraphElement>(null)
  useEffect(() => {
    const checkOverflow = () => {
      const element = contentRef.current
      if (element) {
        const lineHeight = parseFloat(getComputedStyle(element).lineHeight)
        const maxHeight = lineHeight * 3
        setNeedsTruncation(element.scrollHeight > maxHeight)
      }
    }

    checkOverflow()
    window.addEventListener('resize', checkOverflow)
    return () => window.removeEventListener('resize', checkOverflow)
  }, [entryDetails.loreEntry.content])

  return (
    <div className="bg-[rgb(var(--bg-dark))] rounded-xl p-4 sm:p-4 space-y-4">
      {/* Author and timestamp with delete button */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <span className="text-sm text-[rgb(var(--text-primary))]">{entryDetails.userDetails.username}</span>
          <span className="text-xs text-[rgb(var(--text-secondary))]">({entryDetails.loreEntry.votes} votes)</span>
        </div>
        <div className="flex items-center gap-4">
          <span 
            className="text-xs sm:text-sm text-[rgb(var(--text-secondary))]" 
            title={new Date(entryDetails.loreEntry.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              hour12: false
            })}
          >
            {formatDate(entryDetails.loreEntry.createdAt.toISOString())}
          </span>
          <button
            onClick={() => onDelete(entryDetails.loreEntry.id)}
            className="text-red-500 hover:text-red-400 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
            </svg>
          </button>
        </div>
      </div>

      {/* NFT Preview */}
      <div className="flex gap-2 sm:gap-4">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden flex-shrink-0">
          <img
            src={entryDetails.nft.imageUrl}
            alt={entryDetails.nft.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-sm sm:text-base font-medium text-[rgb(var(--text-primary))]">
            {entryDetails.nft.name}
          </h3>
          <p className="text-xs sm:text-sm text-[rgb(var(--text-secondary))] mb-2">
            {entryDetails.nft.collection}
          </p>
          <div className="relative">
            <div className={`relative ${
              isExpanded 
                ? 'max-h-[1000px]' 
                : 'max-h-[4.5em] overflow-hidden'
            }`}>
              <p 
                ref={contentRef}
                className="text-xs sm:text-base text-[rgb(var(--text-primary))] leading-[1.5]"
              >
                {entryDetails.loreEntry.content}
              </p>
              {!isExpanded && needsTruncation && (
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[rgb(var(--bg-dark))] to-transparent pointer-events-none" />
              )}
            </div>
            {needsTruncation && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-xs sm:text-sm text-[rgb(var(--text-secondary))] sm:hover:text-[rgb(var(--text-primary))] mt-1 transition-colors duration-200"
              >
                {isExpanded ? 'Show less' : 'Read more'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 