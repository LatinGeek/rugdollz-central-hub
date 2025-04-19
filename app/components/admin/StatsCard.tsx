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
      {/* Mobile: List-like layout */}
      <div className="md:hidden flex items-center p-4 gap-4">
        {/* Image on left */}
        <div className="w-10 flex-shrink-0">
          <PlaceholderImage category={category} className="w-full h-full opacity-50" />
        </div>
        {/* Content on right */}
        <div className="flex-1">
          <h3 className="text-base font-semibold text-[rgb(var(--text-primary))] mb-0">{title}</h3>
          <div className="space-y-0">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-xs text-[rgb(var(--text-secondary))]">
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
        </div>
      </div>

      {/* Desktop: Original layout */}
      <div className="hidden md:block">
        {/* Header with gradient overlay */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--accent))] to-[rgb(var(--accent-dark))] opacity-10" />
          <div className="relative flex flex-col">
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
    </div>
  )
} 