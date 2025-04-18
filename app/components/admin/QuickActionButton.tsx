'use client'

interface QuickActionButtonProps {
  title: string
  description: string
  onClick?: () => void
}

export function QuickActionButton({ title, description, onClick }: QuickActionButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="p-4 bg-[rgb(var(--bg-light))] rounded-lg hover:bg-[rgb(var(--accent))] 
        transition-colors text-center w-full"
    >
      <h3 className="font-semibold text-[rgb(var(--text-primary))]">{title}</h3>
      <p className="text-sm text-[rgb(var(--text-secondary))]">{description}</p>
    </button>
  )
} 