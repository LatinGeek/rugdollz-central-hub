'use client'

import { PlaceholderImage } from '@/app/components/PlaceholderImage'

interface StatsCardProps {
  title: string
  category: string
  stats: {
    label: string
    value: string | number
    isAccent?: boolean
  }[]
}

export function StatsCard({ title, category, stats }: StatsCardProps) {
  return (
    <div className="bg-[rgb(var(--bg-light))] rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-[rgb(var(--text-primary))]">{title}</h3>
        <PlaceholderImage category={category} className="w-8 h-8" />
      </div>
      <div className="space-y-2">
        {stats.map((stat, index) => (
          <div key={index} className="flex justify-between">
            <span className="text-[rgb(var(--text-secondary))]">{stat.label}</span>
            <span className={`font-bold ${stat.isAccent 
              ? 'text-[rgb(var(--accent))]' 
              : 'text-[rgb(var(--text-primary))]'}`}>
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
} 