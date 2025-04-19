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
    <div className={`relative group ${isCurrentUser 
      ? 'bg-gradient-to-r from-[rgb(var(--accent-light))] to-[rgb(var(--accent-light))]/80' 
      : user.rank <= 3 
      ? 'bg-[rgb(var(--bg-light))]'
      : 'bg-[rgb(var(--bg-light))]'} 
      rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]`}>
      
      {/* Rank Badge with gradient */}
      <div className={`absolute -left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center
        ${user.rank === 1 
          ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' 
          : user.rank === 2 
          ? 'bg-gradient-to-br from-gray-400 to-gray-600'
          : user.rank === 3
          ? 'bg-gradient-to-br from-amber-600 to-amber-800'
          : 'bg-gradient-to-br from-[rgb(var(--primary-orange))] to-[rgb(var(--bg-light))]'} 
        text-white font-bold text-lg shadow-lg z-10`}>
        {user.rank}
      </div>

      <div className="flex items-center gap-6 ml-8">
        {/* Avatar with glow effect */}
        <div className="relative flex-shrink-0">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[rgb(var(--accent))] 
            shadow-lg group-hover:shadow-xl transition-all duration-300">
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
          {/* Level Badge with enhanced design */}
          <div className="absolute -bottom-1 -right-1 bg-gradient-to-br from-[rgb(var(--accent))] to-[rgb(var(--accent-dark))] 
            text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center 
            border-2 border-white shadow-md">
            {user.level}
          </div>
        </div>

        {/* User Info with improved layout */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3">
            <h3 className={`text-base font-bold text-lg truncate ${isCurrentUser 
              ? 'text-[rgb(var(--accent))]' 
              : 'text-[rgb(var(--text-primary))]'}`}>
              {user.name}
            </h3>
            {isCurrentUser && (
              <span className="text-xs bg-gradient-to-r from-[rgb(var(--accent))] to-[rgb(var(--accent-dark))] 
                text-white px-2.5 py-1 rounded-full flex-shrink-0 shadow-md">
                You
              </span>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-0 sm:gap-5 mt-2">
            <div className="flex items-center gap-2">
              <span className="text-sm text-[rgb(var(--text-secondary))]">Points:</span>
              <span className="font-semibold text-[rgb(var(--accent))] text-base">
                {user.points.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-[rgb(var(--text-secondary))]">Achievements:</span>
              <span className="font-semibold text-[rgb(var(--accent))] text-base">
                {user.achievements}
              </span>
            </div>
            {user.streak > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-[rgb(var(--text-secondary))]">Streak:</span>
                <span className="font-semibold text-[rgb(var(--accent))] text-base">
                  {user.streak} days
                </span>
              </div>
            )}
          </div>
        </div>


      </div>
    </div>
  )
} 