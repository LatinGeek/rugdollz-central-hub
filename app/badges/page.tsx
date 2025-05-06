'use client'

import { useState, useRef, useEffect } from 'react'
import { Badges } from '@/app/components/profile/Badges'
import { BadgeDetailsComponent } from '@/app/components/profile/BadgeDetailsComponent'
import { Collection, CollectionType } from '@/types/enums/collection'
import { BadgeDetails } from '@/types/FormattedData/badge-details'
import { useBadgeService } from '@/services/badges'
import { LoadingSpinner } from '@/app/components/ui/LoadingSpinner'
import { useAuth } from '../contexts/AuthContext'

export default function BadgePage() {
  const [activeTab, setActiveTab] = useState<CollectionType>(Collection.rugDollzOG)
  const [selectedBadge, setSelectedBadge] = useState<BadgeDetails | null>(null)
  const [showLeftGradient, setShowLeftGradient] = useState(false)
  const [showRightGradient, setShowRightGradient] = useState(true)
  const [badgeDetails, setBadgeDetails] = useState<BadgeDetails[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const tabsRef = useRef<HTMLDivElement>(null)
  const { user } = useAuth()
  const { getBadgeDetails } = useBadgeService()

  useEffect(() => {
    const fetchBadges = async () => {
      try {
        setIsLoading(true)
        const badges = await getBadgeDetails()
        setBadgeDetails(badges)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load badges')
        console.error('Error loading badges:', err)
      } finally {
        setIsLoading(false)
      }
    }

    if(user) {
      fetchBadges()
    }
  }, [user])

  // Get collection types from the Collection object
  const tabs: CollectionType[] = Object.values(Collection)

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

  if (isLoading) {
    return <LoadingSpinner fullScreen />
  }

  if (error || !badgeDetails) {
    return (
      <div className="min-h-screen bg-[rgb(var(--bg-darker))] flex items-center justify-center">
        <div className="text-[rgb(var(--text-primary))]">{error || 'Failed to load badges'}</div>
      </div>
    )
  }

  // Get recently earned badges (those with at least one completed requirement)
  const recentlyEarnedBadges = badgeDetails
    .filter(badge => badge.userBadgeRequirements.some(req => req.isCompleted))
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-[rgb(var(--bg-darker))]">
      <div className="container mx-auto px-8 py-8">
        <h1 className="text-3xl font-bold text-[rgb(var(--text-primary))] mb-8">
          Badges
        </h1>

        {/* Recently Earned Badges */}
        {recentlyEarnedBadges.length > 0 && (
          <div className="rounded-lg max-w-7xl mx-auto">
            <Badges badges={recentlyEarnedBadges} title="RECENTLY EARNED" />
          </div>
        )}

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
          <Badges 
            badges={badgeDetails.filter((badge) => badge.badge.collection === activeTab)} 
            title={activeTab.toUpperCase()} 
          />
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
    </div>
  )
} 