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


interface LoreEntryProps {
  loreEntryDetails: LoreEntryDetails
  onVote: (entryId: string, vote: 1 | -1 | null) => void
}

export function LoreEntry({ loreEntryDetails, onVote }: LoreEntryProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [needsTruncation, setNeedsTruncation] = useState(false)
  const contentRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const checkOverflow = () => {
      const element = contentRef.current
      if (element) {
        // Check if content height is greater than 3 lines (assuming 1.5em line height)
        const lineHeight = parseFloat(getComputedStyle(element).lineHeight)
        const maxHeight = lineHeight * 3
        setNeedsTruncation(element.scrollHeight > maxHeight)
      }
    }

    checkOverflow()
    // Recheck on window resize
    window.addEventListener('resize', checkOverflow)
    return () => window.removeEventListener('resize', checkOverflow)
  }, [loreEntryDetails.loreEntry.content])

  const handleVote = (vote: 1 | -1 | null) => {
    // If user clicks the same vote again, remove their vote
    if (loreEntryDetails.userVote === vote) {
      onVote(loreEntryDetails.loreEntry.id, null)
    } else {
      onVote(loreEntryDetails.loreEntry.id, vote)
    }
  }

  return (
    <div className="bg-[rgb(var(--bg-dark))] rounded-xl p-4 sm:p-4 space-y-4">
      {/* Author and timestamp */}
      <div className="flex items-center justify-between text-sm">
        <span className="text-sm text-[rgb(var(--text-primary))]">{loreEntryDetails.userDetails.username}</span>
        <span 
          className="text-xs sm:text-sm text-[rgb(var(--text-secondary))]" 
          title={new Date(loreEntryDetails.loreEntry.createdAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
          })}
        >
          {formatDate(loreEntryDetails.loreEntry.createdAt.toISOString())}
        </span>
      </div>

      {/* NFT Preview */}
      <div className="flex gap-2 sm:gap-4">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden flex-shrink-0">
          <img
            src={loreEntryDetails.nft.imageUrl}
            alt={loreEntryDetails.nft.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-sm sm:text-base font-medium text-[rgb(var(--text-primary))]">
            {loreEntryDetails.nft.name}
          </h3>
          <p className="text-xs sm:text-sm text-[rgb(var(--text-secondary))] mb-2">
            {loreEntryDetails.nft.collection}
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
                {loreEntryDetails.loreEntry.content}
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

      {/* Voting */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => handleVote(1)}
          className={`flex items-center gap-1 transition-colors ${
            loreEntryDetails.userVote === 1
              ? 'text-[rgb(var(--primary-orange))]'
              : 'text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))]'
          }`}
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
          </svg>
        </button>
        <span className="text-[rgb(var(--text-primary))]">{loreEntryDetails.loreEntry.votes}</span>
        <button
          onClick={() => handleVote(-1)}
          className={`flex items-center gap-1 transition-colors ${
            loreEntryDetails.userVote === -1
              ? 'text-[rgb(var(--primary-orange))]'
              : 'text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))]'
          }`}
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </button>
      </div>
    </div>
  )
} 