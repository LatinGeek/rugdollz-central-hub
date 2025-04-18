'use client'

import { useState } from 'react'
import { EmblemDetails } from './EmblemDetails'

interface Emblem {
  id: string
  name: string
  icon: string
  isActive: boolean
  description?: string
}

interface EmblemsProps {
  emblems: Emblem[]
}

export function Emblems({ emblems }: EmblemsProps) {
  const [selectedEmblem, setSelectedEmblem] = useState<Emblem | null>(null)

  // Sort emblems: active first, then inactive
  const sortedEmblems = [...emblems].sort((a, b) => {
    if (a.isActive === b.isActive) return 0
    return a.isActive ? -1 : 1
  })

  return (
    <>
      <div className="bg-[rgb(var(--bg-dark))] rounded-xl p-6">
        <h2 className="text-xl font-bold text-[rgb(var(--text-primary))] mb-4">EMBLEMS</h2>
        <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 gap-4">
          {sortedEmblems.map((emblem) => (
            <div
              key={emblem.id}
              className="relative group aspect-square rounded-lg overflow-visible transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedEmblem(emblem)}
            >
              <div
                className={`w-full h-full flex items-center justify-center rounded-lg transition-all duration-300 ${
                  emblem.isActive
                    ? 'bg-[rgb(var(--accent))] bg-opacity-20 hover:bg-opacity-30'
                    : 'bg-[rgb(var(--bg-darker))] grayscale hover:grayscale-0'
                }`}
              >
                <div
                  className={`w-full h-full flex items-center justify-center transition-all duration-300 ${
                    emblem.isActive 
                      ? 'opacity-100' 
                      : 'opacity-30 group-hover:opacity-50'
                  }`}
                  dangerouslySetInnerHTML={{ __html: emblem.icon }}
                />
                
                {/* Status indicator */}
                <div 
                  className={`absolute top-1 right-1 w-2 h-2 rounded-full transition-all duration-300 ${
                    emblem.isActive 
                      ? 'bg-[rgb(var(--accent))]' 
                      : 'bg-[rgb(var(--text-secondary))] opacity-50'
                  }`}
                />
              </div>
              
              {/* Enhanced Tooltip */}
              <div className="invisible group-hover:visible absolute z-[100] bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
                <div className="bg-[rgb(var(--bg-darker))] p-2.5 rounded-lg shadow-lg border border-[rgb(var(--border-dark))] w-[250px]">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-sm font-medium text-[rgb(var(--text-primary))] truncate flex-1">
                        {emblem.name}
                      </div>
                      {!emblem.isActive && (
                        <span className="text-xs px-1.5 py-0.5 rounded bg-[rgb(var(--bg-light))] text-[rgb(var(--text-secondary))] whitespace-nowrap">
                          Locked
                        </span>
                      )}
                    </div>
                    {emblem.description && (
                      <p className="text-xs text-[rgb(var(--text-secondary))] break-words leading-relaxed">
                        {emblem.description}
                      </p>
                    )}
                  </div>
                </div>
                {/* Tooltip Arrow */}
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 bg-[rgb(var(--bg-darker))] border-r border-b border-[rgb(var(--border-dark))] transform rotate-45" />
              </div>
            </div>
          ))}
          
          {/* Show more button */}
          <button className="aspect-square rounded-lg bg-[rgb(var(--bg-darker))] flex items-center justify-center text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))] transition-colors duration-200">
            <span className="text-lg">+23</span>
          </button>
        </div>
      </div>

      {/* Emblem Details Modal */}
      {selectedEmblem && (
        <EmblemDetails
          emblems={emblems}
          selectedEmblem={selectedEmblem}
          onClose={() => setSelectedEmblem(null)}
          onSelect={setSelectedEmblem}
        />
      )}
    </>
  )
} 