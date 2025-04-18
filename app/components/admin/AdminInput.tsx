'use client'

interface AdminInputProps {
  label?: string
  value: string
  onChange: (value: string) => void
  type?: 'text' | 'password' | 'email' | 'number'
  placeholder?: string
  error?: string
  disabled?: boolean
  className?: string
}

export function AdminInput({
  label,
  value,
  onChange,
  type = 'text',
  placeholder = '',
  error,
  disabled = false,
  className = ''
}: AdminInputProps) {
  return (
    <div className={`space-y-1 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-[rgb(var(--text-secondary))]">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full px-3 py-2 bg-[rgb(var(--bg-darker))] border ${
          error ? 'border-red-500' : 'border-[rgb(var(--border-dark))]'
        } rounded-md text-[rgb(var(--text-primary))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))] disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-[rgb(var(--text-muted))]`}
      />
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  )
} 