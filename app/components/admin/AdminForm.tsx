import { AdminInput } from './AdminInput'
import { AdminDateTimePicker } from './AdminDateTimePicker'

interface FormField {
  label: string
  name: string
  type: 'text' | 'textarea' | 'select' | 'datetime'
  value: string | Date | null
  onChange: (value: string | Date | null) => void
  options?: { value: string; label: string }[]
}

interface AdminFormProps {
  title: string
  fields: FormField[]
  onCancel: () => void
  onSubmit: () => void
  submitLabel?: string
}

export function AdminForm({ title, fields, onCancel, onSubmit, submitLabel = 'Save' }: AdminFormProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium text-[rgb(var(--text-primary))]">{title}</h2>
      <div className="space-y-4">
        {fields.map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-medium text-[rgb(var(--text-secondary))] mb-1">
              {field.label}
            </label>
            {field.type === 'textarea' ? (
              <textarea
                value={field.value as string}
                onChange={(e) => field.onChange(e.target.value)}
                className="w-full px-3 py-2 bg-[rgb(var(--bg-darker))] border border-[rgb(var(--border-dark))] rounded-md text-[rgb(var(--text-primary))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))]"
                rows={4}
              />
            ) : field.type === 'select' ? (
              <select
                value={field.value as string}
                onChange={(e) => field.onChange(e.target.value)}
                className="w-full px-3 py-2 bg-[rgb(var(--bg-darker))] border border-[rgb(var(--border-dark))] rounded-md text-[rgb(var(--text-primary))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))]"
              >
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : field.type === 'datetime' ? (
              <AdminDateTimePicker
                value={field.value as Date | null}
                onChange={(value) => field.onChange(value)}
              />
            ) : (
              <AdminInput
                type="text"
                value={field.value as string}
                onChange={(value) => field.onChange(value)}
                placeholder={`Enter ${field.label.toLowerCase()}`}
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-end space-x-3">
        <button
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))]"
        >
          Cancel
        </button>
        <button
          onClick={onSubmit}
          className="px-4 py-2 text-sm font-medium text-white bg-[rgb(var(--accent))] rounded-md hover:bg-[rgb(var(--accent-dark))]"
        >
          {submitLabel}
        </button>
      </div>
    </div>
  )
} 