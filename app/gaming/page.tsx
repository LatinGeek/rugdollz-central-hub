'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function GamingPage() {
  return (
    <div className="min-h-screen bg-[rgb(var(--bg-darker))] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[rgb(var(--text-primary))] mb-8">Gaming</h1>
        
        {/* Video Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* HyperPlay Demo */}
          <div className="bg-[rgb(var(--bg-light))] rounded-lg overflow-hidden">
            <h2 className="text-2xl font-semibold text-[rgb(var(--text-primary))] p-4">HyperPlay Demo</h2>
            <video 
              className="w-full aspect-video"
              controls
            >
              <source src="/videos/gaming/HyperPlay-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Phantom360 */}
          <div className="bg-[rgb(var(--bg-light))] rounded-lg overflow-hidden">
            <h2 className="text-2xl font-semibold text-[rgb(var(--text-primary))] p-4">Phantom360</h2>
            <video 
              className="w-full aspect-video"
              controls
            >
              <source src="/videos/gaming/Phantom360.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Download Section */}
        <div className="flex justify-center">
          <Link 
            href="https://store.hyperplay.xyz/game/rugdollzworld"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform hover:scale-105"
          >
            <Image
              src="/images/gaming/download-on-hyperplay.png"
              alt="Download on HyperPlay"
              width={200}
              height={100}
              className="rounded-lg"
            />
          </Link>
        </div>
      </div>
    </div>
  )
} 