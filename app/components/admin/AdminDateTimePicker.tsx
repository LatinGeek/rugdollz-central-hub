'use client'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

interface AdminDateTimePickerProps {
  label?: string
  value: Date | null
  onChange: (value: Date | null) => void
  error?: string
  disabled?: boolean
  className?: string
}

export function AdminDateTimePicker({
  label,
  value,
  onChange,
  error,
  disabled = false,
  className = ''
}: AdminDateTimePickerProps) {
  return (
    <div className={`space-y-1 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-[rgb(var(--text-secondary))]">
          {label}
        </label>
      )}
      <div >
        <DatePicker
          selected={value}
          onChange={onChange}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MM/dd/yyyy HH:mm"
          className="w-full px-3 py-2 bg-[rgb(var(--bg-darker))] border border-[rgb(var(--border-dark))] rounded-md text-[rgb(var(--text-primary))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))] disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-[rgb(var(--text-muted))]"
          disabled={disabled}
          placeholderText="Select date and time"
        />
      </div>
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  )
} 