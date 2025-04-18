import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navigation } from './components/Navigation'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RugDollz Central Hub',
  description: 'The central hub for all RugDollz NFT activities',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-[rgb(var(--bg-dark))]">
          <div className="flex h-screen">
            <Navigation />
            {/* Main content */}
            <div className="md:pl-64 flex flex-col flex-1">
              <main className="flex-1">
                <div className="py-6 md:py-6">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Add top padding on mobile to account for the fixed header */}
                    <div className="md:pt-0 pt-16">
                      {children}
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
} 