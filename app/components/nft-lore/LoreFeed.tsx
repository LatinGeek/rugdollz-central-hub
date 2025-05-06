'use client'

import { useState, useEffect } from 'react'
import { LoreEntry } from './LoreEntry'
import { LoreEntryDetails } from '@/types/FormattedData/lore-entry-details'

interface LoreFeedProps {
  loreEntryDetails: LoreEntryDetails[]
  onVote: (entryId: string, voteValue: 1 | -1 | null) => Promise<void>
}

export function LoreFeed({ loreEntryDetails, onVote }: LoreFeedProps) {
  const [entries, setEntries] = useState<LoreEntryDetails[]>(loreEntryDetails)
  
  useEffect(() => {
    setEntries(loreEntryDetails)
  }, [loreEntryDetails])

  const handleVote = (entryId: string, vote: 1 | -1 | null) => {
    setEntries(currentEntries => {
      const entry = currentEntries.find(e => e.loreEntry.id === entryId)
      if (!entry) return currentEntries

      const oldVote = entry.userVote
      let voteChange = 0

      // Calculate vote change
      if (vote === null && oldVote === 1) voteChange = -1
      if (vote === null && oldVote === -1) voteChange = 1
      if (vote === 1 && oldVote === null) voteChange = 1
      if (vote === 1 && oldVote === -1) voteChange = 2
      if (vote === -1 && oldVote === null) voteChange = -1
      if (vote === -1 && oldVote === 1) voteChange = -2

      return currentEntries.map(e => {
        if (e.loreEntry.id !== entryId) return e
        return {
          ...e,
          loreEntry: {
            ...e.loreEntry,
            votes: e.loreEntry.votes + voteChange
          },
          userVote: vote
        }
      })
    })
  }

  return (
    <div className="space-y-4">
      {entries.map(entry => (
        <LoreEntry
          key={entry.loreEntry.id}
          loreEntryDetails={entry}
          onVote={onVote}
        />
      ))}
    </div>
  )
} 