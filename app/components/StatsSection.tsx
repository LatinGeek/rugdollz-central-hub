'use client'

interface StatItem {
  title: string
  value: string
  description: string
}

export function StatsSection() {
  const stats: StatItem[] = [
    {
      title: 'Total NFTs',
      value: '10,000+',
      description: 'Unique NFTs across all collections'
    },
    {
      title: 'Active Players',
      value: '5,000+',
      description: 'Players in our gaming ecosystem'
    },
    {
      title: '$RUGZ Staked',
      value: '1M+',
      description: 'Total $RUGZ tokens staked'
    },
    {
      title: 'Games',
      value: '3+',
      description: 'Unique games in our ecosystem'
    }
  ]

  return (
    <div className="bg-[rgb(var(--bg-light))]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.title} className="text-center">
              <p className="text-4xl font-bold text-[rgb(var(--text-primary))]">{stat.value}</p>
              <p className="mt-2 text-lg font-medium text-[rgb(var(--text-secondary))]">{stat.title}</p>
              <p className="mt-1 text-sm text-[rgb(var(--text-tertiary))]">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 