'use client'

interface AdminModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

export function AdminModal({ isOpen, onClose, title, children }: AdminModalProps) {
  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div 
        className="bg-[rgb(var(--bg-dark))] rounded-lg p-6 w-full max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4 text-[rgb(var(--text-primary))]">
          {title}
        </h2>
        {children}
      </div>
    </div>
  )
} 