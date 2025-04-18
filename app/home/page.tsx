'use client'

import { Hero } from '../components/Hero'
import { FeaturedSection } from '../components/FeaturedSection'
import { StatsSection } from '../components/StatsSection'
import { TokenSection } from '../components/TokenSection'
import { NewsletterSection } from '../components/NewsletterSection'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[rgb(var(--bg-darker))]">

      <Hero />
      <FeaturedSection />
      <StatsSection />
      <TokenSection />
      <NewsletterSection />
    </div>
  )
} 