'use client'

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
    title: 'NFT Moderation',
    description: 'Review and moderate NFTs',
    href: '/nft-moderation'
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Users"
            category="user"
            stats={[
              { label: 'Total Users', value: stats.users.total },
              { label: 'Active Today', value: stats.users.active },
              { label: 'New Today', value: stats.users.newToday },
              { label: 'Growth', value: `${stats.users.growth}%` }
            ]}
          />
          <StatsCard
            title="NFTs"
            category="nft"
            stats={[
              { label: 'Total NFTs', value: stats.nfts.total },
              { label: 'Listed', value: stats.nfts.listed },
              { label: 'Sold Today', value: stats.nfts.soldToday },
              { label: 'Volume', value: `$${stats.nfts.volume.toLocaleString()}` }
            ]}
          />
          <StatsCard
            title="Raffles"
            category="raffle"
            stats={[
              { label: 'Active', value: stats.raffles.active },
              { label: 'Completed', value: stats.raffles.completed },
              { label: 'Participants', value: stats.raffles.participants },
              { label: 'Revenue', value: `$${stats.raffles.revenue.toLocaleString()}` }
            ]}
          />
          <StatsCard
            title="Lore"
            category="lore"
            stats={[
              { label: 'Total Entries', value: stats.lore.totalEntries },
              { label: 'New Today', value: stats.lore.newToday },
              { label: 'Upvotes', value: stats.lore.upvotes },
              { label: 'Active Writers', value: stats.lore.activeWriters }
            ]}
          />
        </div>

        {/* Recent Activity */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-[rgb(var(--text-primary))] mb-4">Recent Activity</h2>
          <div className="space-y-2">
            {recentActivities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        </div>

        {/* Top Users */}
        <div>
          <h2 className="text-xl font-semibold text-[rgb(var(--text-primary))] mb-4">Top Users</h2>
          <div className="space-y-2">
            {topUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 