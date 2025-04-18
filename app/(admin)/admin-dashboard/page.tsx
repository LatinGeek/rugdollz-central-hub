'use client'

import { StatsCard } from '../../components/admin/StatsCard'
import { ActivityCard } from '../../components/admin/ActivityCard'
import { UserCard } from '../../components/admin/UserCard'
import { QuickActionButton } from '../../components/admin/QuickActionButton'

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
    description: 'Create and manage user badges and achievements'
  },
  {
    title: 'NFT Moderation',
    description: 'Review and moderate NFTs'
  },
  {
    title: 'Raffle Management',
    description: 'Create and manage raffles'
  },
  {
    title: 'Lore Moderation',
    description: 'Review and moderate lore entries'
  }
]

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[rgb(var(--bg-dark))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[rgb(var(--text-primary))]">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-[rgb(var(--bg-light))] text-[rgb(var(--text-primary))] 
              rounded-lg hover:bg-[rgb(var(--accent))] transition-colors">
              Refresh Data
            </button>
            <button className="px-4 py-2 bg-[rgb(var(--accent))] text-white rounded-lg 
              hover:bg-[rgb(var(--accent-dark))] transition-colors">
              Export Report
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Users"
            category="user"
            stats={[
              { label: 'Total Users', value: stats.users.total },
              { label: 'Active Today', value: stats.users.active },
              { label: 'Growth', value: `+${stats.users.growth}%`, isAccent: true }
            ]}
          />
          <StatsCard
            title="NFTs"
            category="nft"
            stats={[
              { label: 'Total NFTs', value: stats.nfts.total },
              { label: 'Currently Listed', value: stats.nfts.listed },
              { label: 'Daily Volume', value: `$${stats.nfts.volume}`, isAccent: true }
            ]}
          />
          <StatsCard
            title="Raffles"
            category="raffle"
            stats={[
              { label: 'Active Raffles', value: stats.raffles.active },
              { label: 'Total Participants', value: stats.raffles.participants },
              { label: 'Revenue', value: `$${stats.raffles.revenue}`, isAccent: true }
            ]}
          />
          <StatsCard
            title="Lore"
            category="lore"
            stats={[
              { label: 'Total Entries', value: stats.lore.totalEntries },
              { label: 'Active Writers', value: stats.lore.activeWriters },
              { label: 'Total Upvotes', value: stats.lore.upvotes, isAccent: true }
            ]}
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activities */}
          <div className="lg:col-span-2 bg-[rgb(var(--bg-light))] rounded-xl p-6">
            <h2 className="text-xl font-bold text-[rgb(var(--text-primary))] mb-4">Recent Activities</h2>
            <div className="space-y-4">
              {recentActivities.map(activity => (
                <ActivityCard key={activity.id} activity={activity} />
              ))}
            </div>
          </div>

          {/* Top Users */}
          <div className="bg-[rgb(var(--bg-light))] rounded-xl p-6">
            <h2 className="text-xl font-bold text-[rgb(var(--text-primary))] mb-4">Top Users</h2>
            <div className="space-y-4">
              {topUsers.map(user => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <QuickActionButton
              key={index}
              title={action.title}
              description={action.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 