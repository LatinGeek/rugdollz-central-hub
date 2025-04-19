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
    <div className="flex items-center gap-3 py-1.5 px-3 bg-[rgb(var(--bg-dark))] rounded-lg hover:bg-[rgb(var(--bg-darker))] transition-colors duration-200">
      {/* Icon Container */}
      <div className="w-20 h-20 relative">
        <div className="w-full h-full">
          <PlaceholderImage category={activity.type} className="w-full h-full opacity-70" />
        </div>
        <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-[rgb(var(--accent))] border-2 border-[rgb(var(--bg-dark))]" />
      </div>

      {/* Content */}
      <div className="flex-1">
        <p className="font-semibold text-[rgb(var(--text-primary))] text-sm">{activity.action}</p>
        <div className="flex gap-3 text-xs">
          <span className="text-[rgb(var(--text-secondary))]">by {activity.user}</span>
          <span className="text-[rgb(var(--text-secondary))]">{activity.time}</span>
        </div>
      </div>
    </div>
  )
} 