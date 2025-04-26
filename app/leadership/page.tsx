'use client'

import { useState, useMemo } from 'react'
import { LeaderboardCard } from '@/app/components/leadership/LeaderboardCard'
import { getSampleUserDetailsLeaderboard } from '@/types/FormattedData/user-details'

// Sample data for different timeframes
const generateUserData = (timeframe: 'All' | 'Month' | 'Week') => {

  return getSampleUserDetailsLeaderboard(timeframe).sort((a, b) => b.points - a.points)
    .map((user, index) => ({
      userDetails: user,
      rank: index + 1
    }))
}

// Set the current user (for demo purposes)
const currentUserId = 'user15'

export default function LeadershipPage() {
  const [timeframe, setTimeframe] = useState<'All' | 'Month' | 'Week'>('All')

  // Memoize the sorted users based on timeframe
  const sortedUsers = useMemo(() => {
    return generateUserData(timeframe)
  }, [timeframe])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[rgb(var(--bg-darker))] to-[rgb(var(--bg-primary))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header with animated gradient */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--accent))]/20 to-transparent blur-3xl -z-10" />
          <h1 className="text-5xl font-bold sm:font-extrabold text-[rgb(var(--primary-orange))] mb-6">
            Leaderboard
          </h1>
          <p className="text-lg text-[rgb(var(--text-secondary))] max-w-2xl mx-auto">
            Compete with other players and climb to the top of the leaderboard. Earn points through various activities and achievements.
          </p>
        </div>

        {/* Timeframe Selector with modern design */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-xl bg-[rgb(var(--bg-primary))] p-1 shadow-lg">
            {(['All', 'Month', 'Week'] as const).map((time) => (
              <button
                key={time}
                onClick={() => setTimeframe(time)}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300
                  ${timeframe === time
                    ? 'bg-[rgb(var(--accent))] text-white shadow-lg'
                    : 'text-[rgb(var(--text-secondary))] hover:bg-[rgb(var(--bg-secondary))] hover:scale-105'
                  }`}
              >
                {time.charAt(0).toUpperCase() + time.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Top 3 Users with enhanced design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {sortedUsers.slice(0, 3).map((user) => (
            <div 
              key={user.userDetails.id} 
              className="relative transform transition-all duration-500 hover:scale-105 hover:z-10"
            >
              {/* Rank Badge with gradient */}
              <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center
                ${user.rank === 1 
                  ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' 
                  : user.rank === 2 
                  ? 'bg-gradient-to-br from-gray-400 to-gray-600'
                  : 'bg-gradient-to-br from-amber-600 to-amber-800'}
                text-white font-bold text-2xl shadow-xl z-50`}>
                {user.rank}
              </div>
              
              {/* User Card with glass effect */}
              <div className="bg-[rgb(var(--bg-light))] rounded-2xl p-8 pt-12 text-center 
                shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                <div className="relative mx-auto w-32 h-32 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--accent))] to-[rgb(var(--accent-dark))] 
                    rounded-full blur-xl opacity-30" />
                  <img 
                    src={user.userDetails.avatar} 
                    alt={user.userDetails.username || 'User Avatar'}
                    className="w-full h-full rounded-full object-cover border-4 border-[rgb(var(--accent))] 
                      shadow-lg relative z-10"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[rgb(var(--text-primary))] mb-3">{user.userDetails.username}</h3>
                <div className="text-[rgb(var(--accent))] font-semibold text-xl mb-6">
                  {user.userDetails.points.toLocaleString("en-US")} points
                </div>
                <div className="flex justify-center gap-6 text-sm">
                  <div className="flex flex-col items-center">
                    <span className="text-[rgb(var(--text-secondary))]">Level</span>
                    <span className="text-[rgb(var(--accent))] font-bold text-lg">{Math.floor(user.userDetails.points/100)}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[rgb(var(--text-secondary))]">Achievements</span>
                    <span className="text-[rgb(var(--accent))] font-bold text-lg">{user.userDetails.achievements.length}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leaderboard List with enhanced spacing */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {sortedUsers.slice(3).map((user) => (
            <LeaderboardCard
              key={user.userDetails.id}
              userData={{userDetails: user.userDetails, rank: user.rank}}
              isCurrentUser={user.userDetails.id === currentUserId}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 