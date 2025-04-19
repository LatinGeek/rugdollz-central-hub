'use client'

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

interface NFT {
  id: string
  name: string
  imageUrl: string
  collection: string
}

interface LoreEntry {
  id: string
  nft: NFT
  content: string
  createdAt: string
  author: string
  votes: number
  userVote?: 'up' | 'down' | null
}

interface LoreEntryProps {
  entry: LoreEntry
  onVote: (entryId: string, vote: 'up' | 'down' | null) => void
}

export function LoreEntry({ entry, onVote }: LoreEntryProps) {
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
  }, [entry.content])

  const handleVote = (vote: 'up' | 'down') => {
    // If user clicks the same vote again, remove their vote
    if (entry.userVote === vote) {
      onVote(entry.id, null)
    } else {
      onVote(entry.id, vote)
    }
  }

  return (
    <div className="bg-[rgb(var(--bg-dark))] rounded-xl p-4 sm:p-4 space-y-4">
      {/* Author and timestamp */}
      <div className="flex items-center justify-between text-sm">
        <span className="text-[rgb(var(--text-primary))]">{entry.author}</span>
        <span 
          className="text-[0.8em] sm:text-sm text-[rgb(var(--text-secondary))]" 
          title={new Date(entry.createdAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
          })}
        >
          {formatDate(entry.createdAt)}
        </span>
      </div>

      {/* NFT Preview */}
      <div className="flex gap-2 sm:gap-4">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden flex-shrink-0">
          <img
            src={entry.nft.imageUrl}
            alt={entry.nft.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-base sm:text-lg font-medium text-[rgb(var(--text-primary))]">
            {entry.nft.name}
          </h3>
          <p className="text-sm text-[rgb(var(--text-secondary))] mb-2">
            {entry.nft.collection}
          </p>
          <div className="relative">
            <div className={`relative ${
              isExpanded 
                ? 'transition-[max-height] duration-300 ease-in-out max-h-[1000px]' 
                : 'transition-[max-height] duration-100 ease-in max-h-[4.5em] overflow-hidden'
            }`}>
              <p 
                ref={contentRef}
                className="text-xs sm:text-sm text-[rgb(var(--text-primary))] leading-[1.5]"
              >
                {entry.content}
              </p>
              {!isExpanded && needsTruncation && (
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[rgb(var(--bg-dark))] to-transparent pointer-events-none" />
              )}
            </div>
            {needsTruncation && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-sm text-[rgb(var(--text-secondary))] sm:hover:text-[rgb(var(--text-primary))] mt-1 transition-colors duration-200"
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
          onClick={() => handleVote('up')}
          className={`flex items-center gap-1 transition-colors ${
            entry.userVote === 'up'
              ? 'text-[rgb(var(--primary-orange))]'
              : 'text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))]'
          }`}
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
          </svg>
        </button>
        <span className="text-[rgb(var(--text-primary))]">{entry.votes}</span>
        <button
          onClick={() => handleVote('down')}
          className={`flex items-center gap-1 transition-colors ${
            entry.userVote === 'down'
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