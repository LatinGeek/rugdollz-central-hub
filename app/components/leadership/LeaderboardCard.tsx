'use client'

import { PlaceholderImage } from '../PlaceholderImage'

interface User {
  id: string
  rank: number
  name: string
  avatar?: string
  points: number
  level: number
  achievements: number
  streak: number
}

interface LeaderboardCardProps {
  user: User
  isCurrentUser?: boolean
}

export function LeaderboardCard({ user, isCurrentUser }: LeaderboardCardProps) {
  return (
    <div className={`relative group ${isCurrentUser ? 'bg-[rgb(var(--accent-light))]' : 'bg-[rgb(var(--bg-primary))]'} 
      rounded-lg p-4 transition-all duration-300 hover:shadow-lg`}>
      {/* Rank Badge */}
      <div className={`absolute -left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center
        ${user.rank <= 3 ? 'bg-[rgb(var(--accent))]' : 'bg-[rgb(var(--bg-secondary))]'} 
        text-white font-bold shadow-lg`}>
        {user.rank}
      </div>

      <div className="flex items-center gap-4 ml-6">
        {/* Avatar */}
        <div className="relative flex-shrink-0">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[rgb(var(--accent))]">
            {user.avatar ? (
              <img 
                src={user.avatar} 
                alt={user.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <PlaceholderImage 
                category="user" 
                className="w-full h-full"
              />
            )}
          </div>
          {/* Level Badge */}
          <div className="absolute -bottom-1 -right-1 bg-[rgb(var(--accent))] text-white text-xs 
            font-bold rounded-full w-5 h-5 flex items-center justify-center border border-white">
            {user.level}
          </div>
        </div>

        {/* User Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className={`font-semibold truncate ${isCurrentUser ? 'text-[rgb(var(--accent))]' : 'text-[rgb(var(--text-primary))]'}`}>
              {user.name}
            </h3>
            {isCurrentUser && (
              <span className="text-xs bg-[rgb(var(--accent))] text-white px-2 py-0.5 rounded-full flex-shrink-0">
                You
              </span>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-4 mt-1">
            <div className="flex items-center gap-1">
              <span className="text-sm text-[rgb(var(--text-secondary))]">Points:</span>
              <span className="font-medium text-[rgb(var(--accent))]">{user.points.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm text-[rgb(var(--text-secondary))]">Achievements:</span>
              <span className="font-medium text-[rgb(var(--accent))]">{user.achievements}</span>
            </div>
            {user.streak > 0 && (
              <div className="flex items-center gap-1">
                <span className="text-sm text-[rgb(var(--text-secondary))]">Streak:</span>
                <span className="font-medium text-[rgb(var(--accent))]">{user.streak} days</span>
              </div>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-32 hidden md:block flex-shrink-0">
          <div className="h-2 bg-[rgb(var(--bg-secondary))] rounded-full overflow-hidden">
            <div 
              className="h-full bg-[rgb(var(--accent))] rounded-full transition-all duration-300"
              style={{ width: `${(user.points / 10000) * 100}%` }}
            />
          </div>
          <div className="text-xs text-[rgb(var(--text-secondary))] text-right mt-1">
            {Math.round((user.points / 10000) * 100)}% to next level
          </div>
        </div>
      </div>
    </div>
  )
} 