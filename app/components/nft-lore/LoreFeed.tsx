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