'use client'

import { useState } from 'react'
import { LoreEntry } from './LoreEntry'

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

interface LoreFeedProps {
  entries: LoreEntry[]
}

export function LoreFeed({ entries: initialEntries }: LoreFeedProps) {
  const [entries, setEntries] = useState(initialEntries)

  const handleVote = (entryId: string, vote: 'up' | 'down' | null) => {
    setEntries(currentEntries =>
      currentEntries.map(entry => {
        if (entry.id !== entryId) return entry

        const oldVote = entry.userVote
        let voteChange = 0

        // Calculate vote change
        if (vote === null && oldVote === 'up') voteChange = -1
        if (vote === null && oldVote === 'down') voteChange = 1
        if (vote === 'up' && oldVote === null) voteChange = 1
        if (vote === 'up' && oldVote === 'down') voteChange = 2
        if (vote === 'down' && oldVote === null) voteChange = -1
        if (vote === 'down' && oldVote === 'up') voteChange = -2

        return {
          ...entry,
          votes: entry.votes + voteChange,
          userVote: vote
        }
      })
    )
  }

  return (
    <div className="space-y-4">
      {entries.map(entry => (
        <LoreEntry
          key={entry.id}
          entry={entry}
          onVote={handleVote}
        />
      ))}
    </div>
  )
} 