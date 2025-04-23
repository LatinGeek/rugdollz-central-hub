'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function GamingPage() {
  return (
    <div className="min-h-screen bg-[rgb(var(--bg-darker))]">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/gaming/HyperPlay-demo.mp4" type="video/mp4" />
        </video>
        <div className="relative z-20 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">RugDollz Gaming</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Experience the world of RugDollz in a whole new way through our immersive gaming platform
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[rgb(var(--bg-light))] rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-[rgb(var(--text-primary))] mb-4">HyperPlay Experience</h2>
            <p className="text-[rgb(var(--text-secondary))] mb-4">
              Dive into the RugDollz universe with our exclusive HyperPlay game. Experience unique gameplay mechanics,
              collect special items, and interact with other RugDollz holders in a dynamic virtual world.
            </p>
            <ul className="space-y-2 text-[rgb(var(--text-secondary))]">
              <li>• Exclusive in-game items for RugDollz holders</li>
              <li>• Multiplayer features and social interactions</li>
              <li>• Regular updates and new content</li>
              <li>• Special rewards and achievements</li>
            </ul>
          </div>

          <div className="bg-[rgb(var(--bg-light))] rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-[rgb(var(--text-primary))] mb-4">Phantom360 View</h2>
            <p className="text-[rgb(var(--text-secondary))] mb-4">
              Explore the RugDollz world from every angle with our immersive 360-degree experience. Get up close
              and personal with your favorite RugDollz characters and environments.
            </p>
            <ul className="space-y-2 text-[rgb(var(--text-secondary))]">
              <li>• Interactive 360-degree exploration</li>
              <li>• Detailed character models and environments</li>
              <li>• Exclusive behind-the-scenes content</li>
              <li>• Mobile and VR compatible</li>
            </ul>
          </div>
        </div>

        {/* Video Showcase */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[rgb(var(--text-primary))] mb-8 text-center">Game Showcase</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[rgb(var(--bg-light))] rounded-lg overflow-hidden">
              <h3 className="text-xl font-semibold text-[rgb(var(--text-primary))] p-4">HyperPlay Demo</h3>
              <video 
                className="w-full aspect-video"
                controls
              >
                <source src="/videos/gaming/HyperPlay-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="bg-[rgb(var(--bg-light))] rounded-lg overflow-hidden">
              <h3 className="text-xl font-semibold text-[rgb(var(--text-primary))] p-4">Phantom360</h3>
              <video 
                className="w-full aspect-video"
                controls
              >
                <source src="/videos/gaming/Phantom360.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[rgb(var(--text-primary))] mb-8">Ready to Play?</h2>
          <p className="text-[rgb(var(--text-secondary))] mb-8 max-w-2xl mx-auto">
            Download RugDollz World on HyperPlay and start your adventure today. Join thousands of players
            in the most immersive RugDollz experience yet.
          </p>
          <Link 
            href="https://store.hyperplay.xyz/game/rugdollzworld"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform hover:scale-105"
          >
            <Image
              src="/images/gaming/download-on-hyperplay.png"
              alt="Download on HyperPlay"
              width={300}
              height={100}
              className="rounded-lg"
            />
          </Link>
        </div>
      </div>
    </div>
  )
} 