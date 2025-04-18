'use client'

interface AdminListItemProps {
  icon?: string
  title: string
  description?: string
  status?: {
    label: string
    isActive: boolean
  }
  onEdit?: () => void
  onDelete?: () => void
}

export function AdminListItem({ 
  icon, 
  title, 
  description, 
  status, 
  onEdit, 
  onDelete 
}: AdminListItemProps) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-lg border border-[rgb(var(--border-dark))] bg-[rgb(var(--bg-darker))]">
      {icon && (
        <div
          className={`w-16 h-16 flex items-center justify-center rounded-lg flex-shrink-0 ${
            status?.isActive
              ? 'bg-[rgb(var(--accent))] bg-opacity-20'
              : 'bg-[rgb(var(--bg-darker))] grayscale'
          }`}
        >
          <div 
            className="w-12 h-12 flex items-center justify-center"
            dangerouslySetInnerHTML={{ __html: icon }}
          />
        </div>
      )}
      
      <div className="flex-grow">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-medium text-[rgb(var(--text-primary))]">
            {title}
          </h3>
          {status && (
            <span className={`px-2 py-0.5 text-xs rounded-full ${
              status.isActive
                ? 'bg-green-500/20 text-green-500'
                : 'bg-red-500/20 text-red-500'
            }`}>
              {status.label}
            </span>
          )}
        </div>
        {description && (
          <p className="text-sm text-[rgb(var(--text-secondary))] mt-1">
            {description}
          </p>
        )}
      </div>
      
      {(onEdit || onDelete) && (
        <div className="flex items-center gap-1">
          {onEdit && (
            <button
              onClick={onEdit}
              className="p-2 bg-[rgb(var(--primary))] text-white rounded-lg hover:bg-[rgb(var(--primary))]/90 transition-colors"
              aria-label="Edit"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
          )}
          {onDelete && (
            <button
              onClick={onDelete}
              className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              aria-label="Delete"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          )}
        </div>
      )}
    </div>
  )
} 