'use client'

import { useState, useEffect } from 'react'
import { StatsCard } from '../../components/admin/StatsCard'
import { ActivityCard } from '../../components/admin/ActivityCard'
import { UserCard } from '../../components/admin/UserCard'
import { QuickActionButton } from '../../components/admin/QuickActionButton'
import { useRouter } from 'next/navigation'

// Sample data for demonstration
const stats = {
  users: {
    total: 1250,
    active: 980,
    newToday: 45,
    growth: 12.5
  },
  nfts: {
    total: 8500,
    listed: 3200,
    soldToday: 120,
    volume: 45000
  },
  raffles: {
    active: 15,
    completed: 85,
    participants: 3200,
    revenue: 25000
  },
  lore: {
    totalEntries: 1250,
    newToday: 25,
    upvotes: 8500,
    activeWriters: 150
  }
}

const recentActivities = [
  { id: 1, type: 'nft', action: 'New NFT listed', user: 'User123', time: '5 min ago' },
  { id: 2, type: 'raffle', action: 'Raffle created', user: 'Admin', time: '15 min ago' },
  { id: 3, type: 'lore', action: 'New lore entry', user: 'Writer456', time: '30 min ago' },
  { id: 4, type: 'user', action: 'New user registered', user: 'NewUser789', time: '1 hour ago' }
]

const topUsers = [
  { id: 1, name: 'User123', points: 12500, nfts: 45, achievements: 12 },
  { id: 2, name: 'Writer456', points: 9800, nfts: 32, achievements: 10 },
  { id: 3, name: 'Collector789', points: 8500, nfts: 56, achievements: 8 }
]

const quickActions = [
  {
    title: 'Manage Badges',
    description: 'Create and manage user badges and achievements',
    href: '/badge-management'
  },
  {
    title: 'Purchase Management',
    description: 'Review purchases',
    href: '/purchase-management'
  },
  {
    title: 'Raffle Management',
    description: 'Create and manage raffles',
    href: '/raffle-management'
  },
  {
    title: 'Lore Moderation',
    description: 'Review and moderate lore entries',
    href: '/lore-moderation'
  }
]

interface CollapsibleSectionProps {
  title: string
  children: React.ReactNode
  defaultExpanded?: boolean
  defaultExpandedDesktop?: boolean
}

function useResponsiveDefault(defaultMobile: boolean, defaultDesktop: boolean) {
  const [isExpanded, setIsExpanded] = useState(defaultMobile)

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setIsExpanded(defaultDesktop)
      } else {
        setIsExpanded(defaultMobile)
      }
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [defaultMobile, defaultDesktop])

  return isExpanded
}

function CollapsibleSection({ 
  title, 
  children, 
  defaultExpanded = false,
  defaultExpandedDesktop = false 
}: CollapsibleSectionProps) {
  const isExpanded = useResponsiveDefault(defaultExpanded, defaultExpandedDesktop)
  const [localExpanded, setLocalExpanded] = useState(isExpanded)

  useEffect(() => {
    setLocalExpanded(isExpanded)
  }, [isExpanded])

  return (
    <div>
      <button
        onClick={() => setLocalExpanded(!localExpanded)}
        className="flex items-center gap-2 text-xl font-semibold text-[rgb(var(--text-primary))] mb-4 hover:text-[rgb(var(--text-secondary))] transition-colors"
      >
        {title}
        <svg 
          viewBox="0 0 24 24" 
          className={`w-5 h-5 transition-transform duration-200 ${localExpanded ? 'rotate-180' : ''}`}
          fill="currentColor"
        >
          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        </svg>
      </button>
      {localExpanded && children}
    </div>
  )
}

export default function AdminDashboard() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-[rgb(var(--bg-darker))]">
      {/* Header */}
      <div className="bg-[rgb(var(--bg-dark))] border-b border-[rgb(var(--border-dark))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            <h1 className="text-2xl font-bold text-[rgb(var(--text-primary))]">Admin Dashboard</h1>
            <p className="mt-1 text-sm text-[rgb(var(--text-secondary))]">
              Monitor and manage your platform&apos;s activity
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mb-8">
          <button className="px-4 py-2 bg-[rgb(var(--bg-dark))] text-[rgb(var(--text-primary))] rounded-lg border border-[rgb(var(--border-dark))] hover:bg-[rgb(var(--bg-darker))] transition-colors">
            Refresh Data
          </button>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {quickActions.map((action) => (
            <QuickActionButton
              key={action.title}
              title={action.title}
              description={action.description}
              onClick={() => router.push(action.href)}
            />
          ))}
        </div>

        {/* Stats Grid */}
        <CollapsibleSection 
          title="Hub Stats" 
          defaultExpanded={false}
          defaultExpandedDesktop={true}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatsCard
              title="Users"
              category="user"
              stats={[
                { label: 'Total Users', value: stats.users.total },
                { label: 'Active Today', value: stats.users.active },
                { label: 'New Today', value: stats.users.newToday },
              ]}
            />
            <StatsCard
              title="NFTs"
              category="nft"
              stats={[
                { label: 'Total NFTs', value: stats.nfts.total },
                { label: 'Listed', value: stats.nfts.listed },
                { label: 'Sold Today', value: stats.nfts.soldToday },
              ]}
            />
            <StatsCard
              title="Raffles"
              category="raffle"
              stats={[
                { label: 'Active', value: stats.raffles.active },
                { label: 'Completed', value: stats.raffles.completed },
                { label: 'Participants', value: stats.raffles.participants },
              ]}
            />
            <StatsCard
              title="Lore"
              category="lore"
              stats={[
                { label: 'Total Entries', value: stats.lore.totalEntries },
                { label: 'New Today', value: stats.lore.newToday },
                { label: 'Upvotes', value: stats.lore.upvotes },
              ]}
            />
          </div>
        </CollapsibleSection>

        {/* Recent Activity */}
        <CollapsibleSection title="Recent Activity">
          <div className="space-y-2 mb-8">
            {recentActivities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        </CollapsibleSection>

        {/* Top Users */}
        <CollapsibleSection title="Top Users">
          <div className="space-y-2">
            {topUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        </CollapsibleSection>
      </div>
    </div>
  )
} 