'use client'

import { PlaceholderImage } from '@/app/components/PlaceholderImage'

interface Activity {
  id: number
  type: string
  action: string
  user: string
  time: string
}

interface ActivityCardProps {
  activity: Activity
}

export function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <div className="group flex items-center gap-6 py-2 px-3 bg-[rgb(var(--bg-darker))] hover:bg-[rgb(var(--bg-dark))] border border-[rgb(var(--border-dark))] rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[rgb(var(--accent)/0.1)]">
      {/* Icon Container */}
      <div className="relative flex-shrink-0">
        <div className="p-1.5 bg-[rgb(var(--bg-dark))] group-hover:bg-[rgb(var(--bg-darker))] rounded-lg transition-colors duration-200">
          <PlaceholderImage category={activity.type} className="w-3 h-3 opacity-70" />
        </div>
        <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-[rgb(var(--accent))] border-2 border-[rgb(var(--bg-darker))] group-hover:border-[rgb(var(--bg-dark))] transition-colors duration-200" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2">
          <p className="text-sm font-medium text-[rgb(var(--text-primary))] truncate">
            {activity.action}
          </p>
          <span className="flex-shrink-0 text-xs text-[rgb(var(--text-secondary))]">
            {activity.time}
          </span>
        </div>
        <p className="text-xs text-[rgb(var(--text-secondary))]">
          by <span className="text-[rgb(var(--accent))] font-medium">{activity.user}</span>
        </p>
      </div>
    </div>
  )
} 