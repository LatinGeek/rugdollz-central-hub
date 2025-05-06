'use client'

interface LoadingSpinnerProps {
  fullScreen?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function LoadingSpinner({ fullScreen = false, size = 'lg' }: LoadingSpinnerProps) {
  const sizes = {
    sm: {
      container: 'w-4 h-4',
      outer: 'w-4 h-4 border-2',
      middle: 'w-3 h-3 border-2',
      inner: 'w-2 h-2 border-2',
      center: 'w-1 h-1',
      orbit: 'w-1 h-1'
    },
    md: {
      container: 'w-12 h-12',
      outer: 'w-12 h-12 border-3',
      middle: 'w-8 h-8 border-3',
      inner: 'w-4 h-4 border-3',
      center: 'w-2 h-2',
      orbit: 'w-1.5 h-1.5'
    },
    lg: {
      container: 'w-24 h-24',
      outer: 'w-24 h-24 border-4',
      middle: 'w-16 h-16 border-4',
      inner: 'w-8 h-8 border-4',
      center: 'w-3 h-3',
      orbit: 'w-2 h-2'
    }
  };

  const spinner = (
    <div className={`relative ${sizes[size].container}`}>
      {/* Glowing background effect */}
      <div className="absolute inset-0 bg-[rgb(var(--primary-orange))] opacity-10 blur-xl rounded-full"></div>
      
      {/* Outer ring with gradient */}
      <div className={`absolute inset-0 border-transparent rounded-full animate-spin ${sizes[size].outer}`}
        style={{
          background: 'linear-gradient(45deg, rgb(var(--primary-orange)), rgb(var(--accent)))',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      ></div>
      
      {/* Middle ring */}
      <div className={`absolute inset-0 m-auto border-transparent rounded-full animate-spin-reverse ${sizes[size].middle}`}
        style={{
          background: 'linear-gradient(45deg, rgb(var(--accent)), rgb(var(--primary-orange)))',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      ></div>
      
      {/* Inner ring */}
      <div className={`absolute inset-0 m-auto border-transparent rounded-full animate-spin ${sizes[size].inner}`}
        style={{
          background: 'linear-gradient(45deg, rgb(var(--primary-orange)), rgb(var(--accent)))',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      ></div>
      
      {/* Center dot with pulse effect */}
      <div className={`absolute inset-0 m-auto bg-[rgb(var(--primary-orange))] rounded-full animate-pulse ${sizes[size].center}`}></div>
      
      {/* Orbiting dots */}
      <div className="absolute inset-0 animate-spin">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 bg-[rgb(var(--accent))] rounded-full ${sizes[size].orbit}`}></div>
        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 bg-[rgb(var(--primary-orange))] rounded-full ${sizes[size].orbit}`}></div>
      </div>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen bg-[rgb(var(--bg-darker))] flex items-center justify-center">
        {spinner}
      </div>
    );
  }

  return spinner;
} 