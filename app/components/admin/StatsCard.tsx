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
    <div className="bg-[rgb(var(--bg-dark))] border border-[rgb(var(--border-dark))] rounded-xl overflow-hidden">
      {/* Header with gradient overlay */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--accent))] to-[rgb(var(--accent-dark))] opacity-10" />
        <div className="relative flex">
          {/* Image Section */}
          <div className="p-3 bg-[rgb(var(--bg-darker))] border-r border-[rgb(var(--border-dark))]">
            <PlaceholderImage category={category} className="w-3 h-3 opacity-50" />
          </div>
          {/* Title Section */}
          <div className="p-3 ml-2">
            <h3 className="text-lg font-semibold text-[rgb(var(--text-primary))]">{title}</h3>
          </div>
        </div>
      </div>

      {/* Stats Content */}
      <div className="p-4 pt-2">
        <div className="space-y-3">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-sm text-[rgb(var(--text-secondary))]">
                {stat.label}
              </span>
              <span className={`text-base font-semibold ${
                stat.isAccent 
                  ? 'text-[rgb(var(--accent))]' 
                  : 'text-[rgb(var(--text-primary))]'
              }`}>
                {stat.value}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom border with gradient */}
        <div className="h-1 w-full mt-4 bg-gradient-to-r from-[rgb(var(--accent))] to-[rgb(var(--accent-dark))] opacity-10 rounded-full" />
      </div>
    </div>
  )
} 