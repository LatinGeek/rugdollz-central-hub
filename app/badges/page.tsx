'use client'

import { useState, useRef, useEffect } from 'react'
import { Badges } from '@/app/components/profile/Badges'
import { BadgeDetailsComponent } from '@/app/components/profile/BadgeDetailsComponent'
import { CollectionType } from '@/types/enums/collection'
import { BadgeDetails, sampleBadgeDetails } from '@/types/FormattedData/badge-details'


// Last 10 earned badges
const lastEarnedBadges: BadgeDetails[] = sampleBadgeDetails.slice(0,3)
const badgeDetails : BadgeDetails[] = sampleBadgeDetails;

export default function BadgePage() {
  const [activeTab, setActiveTab] = useState<CollectionType>('RugDollz OG')
  const [selectedBadge, setSelectedBadge] = useState<BadgeDetails | null>(null)
  const [showLeftGradient, setShowLeftGradient] = useState(false)
  const [showRightGradient, setShowRightGradient] = useState(true)
  const tabsRef = useRef<HTMLDivElement>(null)

  const tabs: CollectionType[] = [
    'RugDollz OG',
    'RugDollz Social',
    'RugDollz 3D',
    'Doruzu',
    'Game NFTs'
  ]

  const handleScroll = () => {
    if (!tabsRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current
    setShowLeftGradient(scrollLeft > 0)
    setShowRightGradient(scrollLeft < scrollWidth - clientWidth)
  }

  useEffect(() => {
    const container = tabsRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      handleScroll() // Initial check
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="container mx-auto bg-[rgb(var(--bg-darker))] px-8 py-8">
      <h1 className="text-3xl font-bold text-[rgb(var(--text-primary))] mb-8">
        Badges
      </h1>

      {/* Last 10 Earned Badges */}
      <div className="rounded-lg max-w-7xl mx-auto">
        <Badges badges={lastEarnedBadges} title="RECENTLY EARNED" />
      </div>

      {/* Collection Tabs */}
      <div className="mb-8 mt-8 relative">
        {/* Gradient Indicators */}
        <div 
          className={`absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[rgb(var(--bg-darker))] to-transparent z-10 pointer-events-none transition-opacity duration-300 ${
            showLeftGradient ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div 
          className={`absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[rgb(var(--bg-darker))] to-transparent z-10 pointer-events-none transition-opacity duration-300 ${
            showRightGradient ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div 
          ref={tabsRef}
          style={{scrollbarWidth: 'none'}} 
          className="flex min-w-full w-0 space-x-4 border-b border-[rgb(var(--border-dark))] overflow-x-scroll"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                activeTab === tab
                  ? 'text-[rgb(var(--primary-orange))] border-b-2 border-[rgb(var(--primary-orange))]'
                  : 'text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Active Collection Badges */}
      <div className="bg-[rgb(var(--bg-dark))] rounded-lg rounded-lg max-w-7xl mx-auto">
        <Badges badges={badgeDetails.filter((badge) => badge.badge.collection === activeTab)} title={activeTab.toUpperCase()} />
      </div>

      {/* Badge Details Modal */}
      {selectedBadge && (
        <BadgeDetailsComponent
          badges={badgeDetails.filter((badge) => badge.badge.collection === activeTab)}
          selectedBadge={selectedBadge}
          onClose={() => setSelectedBadge(null)}
          onSelect={(badge) => setSelectedBadge(badge)}
        />
      )}
    </div>
  )
} 