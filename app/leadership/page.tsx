'use client'

import { useState, useMemo } from 'react'
import { LeaderboardCard } from '@/app/components/leadership/LeaderboardCard'

// Sample data for different timeframes
const generateUserData = (timeframe: 'all' | 'month' | 'week') => {
  const basePoints = {
    all: Array.from({ length: 30 }, (_, i) => Math.floor(Math.random() * 10000) + 1000),
    month: Array.from({ length: 30 }, (_, i) => Math.floor(Math.random() * 5000) + 500),
    week: Array.from({ length: 30 }, (_, i) => Math.floor(Math.random() * 2000) + 200)
  }

  return Array.from({ length: 30 }, (_, i) => ({
    id: `user${i + 1}`,
    rank: i + 1,
    name: `User${i + 1}`,
    avatar: `https://i.pravatar.cc/150?img=${i + 1}`,
    points: basePoints[timeframe][i],
    level: Math.floor(Math.random() * 50) + 1,
    achievements: Math.floor(Math.random() * 20) + 1,
    streak: Math.floor(Math.random() * 30) + 1
  })).sort((a, b) => b.points - a.points)
    .map((user, index) => ({
      ...user,
      rank: index + 1
    }))
}

// Set the current user (for demo purposes)
const currentUserId = 'user15'

export default function LeadershipPage() {
  const [timeframe, setTimeframe] = useState<'all' | 'month' | 'week'>('all')

  // Memoize the sorted users based on timeframe
  const sortedUsers = useMemo(() => {
    return generateUserData(timeframe)
  }, [timeframe])

  return (
    <div className="min-h-screen bg-[rgb(var(--bg-darker))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[rgb(var(--text-primary))] mb-4">
            Leaderboard
          </h1>
          <p className="text-lg text-[rgb(var(--text-secondary))] max-w-2xl mx-auto">
            Compete with other players and climb to the top of the leaderboard. Earn points through various activities and achievements.
          </p>
        </div>

        {/* Timeframe Selector */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg bg-[rgb(var(--bg-primary))] p-1">
            {(['all', 'month', 'week'] as const).map((time) => (
              <button
                key={time}
                onClick={() => setTimeframe(time)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200
                  ${timeframe === time
                    ? 'bg-[rgb(var(--accent))] text-white'
                    : 'text-[rgb(var(--text-secondary))] hover:bg-[rgb(var(--bg-secondary))]'
                  }`}
              >
                {time.charAt(0).toUpperCase() + time.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Top 3 Users */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {sortedUsers.slice(0, 3).map((user) => (
            <div key={user.id} className="relative">
              <div className={`absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center
                ${user.rank === 1 ? 'bg-yellow-400' : user.rank === 2 ? 'bg-gray-400' : 'bg-amber-600'}
                text-white font-bold text-xl shadow-lg`}>
                {user.rank}
              </div>
              <div className="bg-[rgb(var(--bg-primary))] rounded-lg p-6 pt-8 text-center">
                <img 
                  src={user.avatar} 
                  alt={user.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-[rgb(var(--accent))]"
                />
                <h3 className="text-xl font-bold text-[rgb(var(--text-primary))] mb-2">{user.name}</h3>
                <div className="text-[rgb(var(--accent))] font-semibold text-lg mb-4">
                  {user.points.toLocaleString()} points
                </div>
                <div className="flex justify-center gap-4 text-sm text-[rgb(var(--text-secondary))]">
                  <div>Level {user.level}</div>
                  <div>{user.achievements} achievements</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leaderboard List */}
        <div className="space-y-4">
          {sortedUsers.map((user) => (
            <LeaderboardCard
              key={user.id}
              user={user}
              isCurrentUser={user.id === currentUserId}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 