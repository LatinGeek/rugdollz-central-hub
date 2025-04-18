'use client'

export function TokenSection() {
  return (
    <div className="bg-[rgb(var(--bg-darker))]">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[rgb(var(--text-primary))] sm:text-4xl">
            <span className="block">$RUGZ ERC20: Stake, play, unlock!</span>
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-[rgb(var(--text-secondary))] mx-auto">
            $RUGZ is the RugDollz currency, earned by staking Social RugDollz and ETH Rugged NFTs. It can be used to buy new NFTs from the marketplace and enhance your experience!
          </p>
          <div className="mt-8">
            <a
              href="/staking"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[rgb(var(--primary-orange))] hover:bg-[rgb(var(--primary-red))]"
            >
              EARN $RUGZ
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 