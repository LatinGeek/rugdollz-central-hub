'use client'

interface ProfileHeaderProps {
  walletAddress: string
}

export function ProfileHeader({ walletAddress }: ProfileHeaderProps) {
  // Format wallet address to show first 4 and last 4 characters
  const formatAddress = (address: string) => {
    if (!address) return ''
    const start = address.slice(0, 4)
    const end = address.slice(-4)
    return `${start}...${end}`
  }

  return (
    <div className="relative w-full h-[400px] bg-[rgb(var(--primary-orange))] overflow-hidden">
      {/* Default Profile Header */}
      <div className="absolute inset-0 flex justify-end items-center pr-16">
        <img
          src="/images/default-profile-header.png"
          alt="Profile silhouette"
          className="h-[90%] w-auto object-contain opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-16">
        <div className="flex flex-col">
          <h1 className="text-6xl font-bold text-white tracking-wider font-mono">
            {formatAddress(walletAddress)}
          </h1>
          <div className="mt-4 flex items-center space-x-2">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-5 h-5 text-white/50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                fill="currentColor"
              />
            </svg>
            <p className="text-white/50 font-mono text-sm">
              {walletAddress}
            </p>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--bg-darker))] to-transparent z-10 opacity-50" />
    </div>
  )
} 