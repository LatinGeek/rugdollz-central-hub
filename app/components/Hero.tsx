'use client'

export function Hero() {
  return (
    <div className="relative bg-[rgb(var(--bg-darker))] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-[rgb(var(--text-primary))] sm:text-5xl md:text-6xl">
                <span className="block">RugDollz World:</span>
                <span className="block text-[rgb(var(--primary-orange))]">Where adventure meets the blockchain</span>
              </h1>
              <p className="mt-3 text-base text-[rgb(var(--text-secondary))] sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Experience the ultimate NFT gaming universe with RugDollz. Stake, play, and earn $RUGZ tokens while exploring our exciting games.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="/shop"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[rgb(var(--primary-orange))] hover:bg-[rgb(var(--primary-red))] md:py-4 md:text-lg md:px-10"
                  >
                    Get Started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="/about"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[rgb(var(--text-primary))] bg-[rgb(var(--bg-light))] hover:bg-[rgb(var(--border-light))] md:py-4 md:text-lg md:px-10"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
} 