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
    <div className="flex items-center gap-4 p-4 bg-[rgb(var(--bg-dark))] rounded-lg">
      <PlaceholderImage category={activity.type} className="w-10 h-10" />
      <div className="flex-1">
        <p className="text-[rgb(var(--text-primary))]">{activity.action}</p>
        <p className="text-sm text-[rgb(var(--text-secondary))]">by {activity.user}</p>
      </div>
      <span className="text-sm text-[rgb(var(--text-secondary))]">{activity.time}</span>
    </div>
  )
} 