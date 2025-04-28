'use client'

export function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-[rgb(var(--bg-darker))] flex items-center justify-center">
      <div className="relative w-24 h-24">
        {/* Glowing background effect */}
        <div className="absolute inset-0 bg-[rgb(var(--primary-orange))] opacity-10 blur-xl rounded-full"></div>
        
        {/* Outer ring with gradient */}
        <div className="absolute inset-0 border-4 border-transparent rounded-full animate-spin"
          style={{
            background: 'linear-gradient(45deg, rgb(var(--primary-orange)), rgb(var(--accent)))',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        ></div>
        
        {/* Middle ring */}
        <div className="absolute inset-0 m-auto w-16 h-16 border-4 border-transparent rounded-full animate-spin-reverse"
          style={{
            background: 'linear-gradient(45deg, rgb(var(--accent)), rgb(var(--primary-orange)))',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        ></div>
        
        {/* Inner ring */}
        <div className="absolute inset-0 m-auto w-8 h-8 border-4 border-transparent rounded-full animate-spin"
          style={{
            background: 'linear-gradient(45deg, rgb(var(--primary-orange)), rgb(var(--accent)))',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        ></div>
        
        {/* Center dot with pulse effect */}
        <div className="absolute inset-0 m-auto w-3 h-3 bg-[rgb(var(--primary-orange))] rounded-full animate-pulse"></div>
        
        {/* Orbiting dots */}
        <div className="absolute inset-0 animate-spin">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[rgb(var(--accent))] rounded-full"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[rgb(var(--primary-orange))] rounded-full"></div>
        </div>
    
      </div>
    </div>
  )
} 