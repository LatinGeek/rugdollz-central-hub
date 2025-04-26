'use client'

import { useState } from 'react'
import { LoreEntry } from './LoreEntry'
import { LoreEntryDetails } from '@/types/FormattedData/lore-entry-details'
interface LoreFeedProps {
  loreEntryDetails: LoreEntryDetails[]
}

export function LoreFeed({ loreEntryDetails }: LoreFeedProps) {
  const [entries, setEntries] = useState<LoreEntryDetails[]>(loreEntryDetails)
  const handleVote = (entryId: string, vote: 1 | -1 | null) => {
    setEntries(currentEntries =>
      currentEntries.map((entry: LoreEntryDetails) => {
        if (entry.loreEntry.id !== entryId) return entry
        const oldVote = entry.userVote
        let voteChange = 0

        // Calculate vote change
        if (vote === null && oldVote === 1) voteChange = -1
        if (vote === null && oldVote === -1) voteChange = 1
        if (vote === 1 && oldVote === null) voteChange = 1
        if (vote === 1 && oldVote === -1) voteChange = 2
        if (vote === -1 && oldVote === null) voteChange = -1
        if (vote === -1 && oldVote === 1) voteChange = -2


        entry.loreEntry.votes = entry.loreEntry.votes + voteChange
        return {
          ...entry,
          userVote: vote
        }
      })
    )
  }

  return (
    <div className="space-y-4">
      {entries.map(entry => (
        <LoreEntry
          key={entry.loreEntry.id}
          loreEntryDetails={entry}
          onVote={handleVote}
        />
      ))}
    </div>
  )
} 