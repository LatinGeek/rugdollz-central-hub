'use client'

import { PlaceholderImage } from '@/app/components/PlaceholderImage'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[rgb(var(--bg-darker))]">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-[rgb(var(--bg-dark))]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgb(var(--bg-darker))] z-10" />
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Welcome to RugDollz
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              A unique NFT ecosystem where creativity meets blockchain technology
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Vision Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[rgb(var(--text-primary))] mb-6">
            Our Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[rgb(var(--bg-dark))] p-6 rounded-lg border border-[rgb(var(--border-dark))]">
              <h3 className="text-xl font-semibold text-[rgb(var(--text-primary))] mb-4">
                Building a Community
              </h3>
              <p className="text-[rgb(var(--text-secondary))]">
                RugDollz is more than just a collection of NFTs. We&apos;re building a vibrant community
                where artists, collectors, and enthusiasts can come together to create, share, and
                experience unique digital art.
              </p>
            </div>
            <div className="bg-[rgb(var(--bg-dark))] p-6 rounded-lg border border-[rgb(var(--border-dark))]">
              <h3 className="text-xl font-semibold text-[rgb(var(--text-primary))] mb-4">
                Innovation in Digital Art
              </h3>
              <p className="text-[rgb(var(--text-secondary))]">
                Our platform combines cutting-edge blockchain technology with creative expression,
                allowing users to customize, trade, and showcase their unique RugDollz NFTs in
                innovative ways.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[rgb(var(--text-primary))] mb-6">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[rgb(var(--bg-dark))] p-6 rounded-lg border border-[rgb(var(--border-dark))]">
              <div className="w-12 h-12 bg-[rgb(var(--primary-orange))] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[rgb(var(--text-primary))] mb-2">
                NFT Customization
              </h3>
              <p className="text-[rgb(var(--text-secondary))]">
                Create unique RugDollz by customizing various attributes and features
              </p>
            </div>
            <div className="bg-[rgb(var(--bg-dark))] p-6 rounded-lg border border-[rgb(var(--border-dark))]">
              <div className="w-12 h-12 bg-[rgb(var(--primary-orange))] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[rgb(var(--text-primary))] mb-2">
                Community Events
              </h3>
              <p className="text-[rgb(var(--text-secondary))]">
                Participate in raffles, competitions, and community-driven events
              </p>
            </div>
            <div className="bg-[rgb(var(--bg-dark))] p-6 rounded-lg border border-[rgb(var(--border-dark))]">
              <div className="w-12 h-12 bg-[rgb(var(--primary-orange))] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[rgb(var(--text-primary))] mb-2">
                Token Economy
              </h3>
              <p className="text-[rgb(var(--text-secondary))]">
                Earn and spend $RUGZ tokens for various activities and rewards
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-bold text-[rgb(var(--text-primary))] mb-6">
            Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[rgb(var(--bg-dark))] p-6 rounded-lg border border-[rgb(var(--border-dark))] text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <PlaceholderImage 
                  category="User" 
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-[rgb(var(--text-primary))] mb-2">
                John Doe
              </h3>
              <p className="text-[rgb(var(--text-secondary))] mb-2">
                Founder & Creative Director
              </p>
              <p className="text-sm text-[rgb(var(--text-secondary))]">
                Passionate about digital art and blockchain technology
              </p>
            </div>
            <div className="bg-[rgb(var(--bg-dark))] p-6 rounded-lg border border-[rgb(var(--border-dark))] text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <PlaceholderImage 
                  category="User" 
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-[rgb(var(--text-primary))] mb-2">
                Jane Smith
              </h3>
              <p className="text-[rgb(var(--text-secondary))] mb-2">
                Lead Developer
              </p>
              <p className="text-sm text-[rgb(var(--text-secondary))]">
                Expert in blockchain development and smart contracts
              </p>
            </div>
            <div className="bg-[rgb(var(--bg-dark))] p-6 rounded-lg border border-[rgb(var(--border-dark))] text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <PlaceholderImage 
                  category="User" 
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-[rgb(var(--text-primary))] mb-2">
                Mike Johnson
              </h3>
              <p className="text-[rgb(var(--text-secondary))] mb-2">
                Community Manager
              </p>
              <p className="text-sm text-[rgb(var(--text-secondary))]">
                Dedicated to building and nurturing our community
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 