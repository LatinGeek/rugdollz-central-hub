'use client'

import { useState } from 'react'

interface AdminFileUploadProps {
  label: string
  value: string
  onChange: (value: string) => void
  accept?: string
  error?: string
  className?: string
}

export function AdminFileUpload({
  label,
  value,
  onChange,
  accept = 'image/*',
  error,
  className = '',
}: AdminFileUploadProps) {
  const [isDragging, setIsDragging] = useState(false)

  const handleFileChange = async (file: File) => {
    if (!file) return

    try {
      // Convert file to base64
      const reader = new FileReader()
      reader.onload = (e) => {
        const base64 = e.target?.result as string
        onChange(base64)
      }
      reader.readAsDataURL(file)
    } catch (error) {
      console.error('Error uploading file:', error)
    }
  }

  return (
    <div className={`space-y-1 ${className}`}>
      <label className="block text-sm font-medium text-[rgb(var(--text))]">
        {label}
      </label>
      <div
        className={`
          relative border-2 border-dashed rounded-lg p-4
          flex flex-col items-center justify-center
          transition-colors duration-200
          ${isDragging ? 'border-[rgb(var(--primary))] bg-[rgb(var(--primary))]/5' : 'border-[rgb(var(--border))]'}
          ${error ? 'border-red-500' : ''}
        `}
        onDragOver={(e) => {
          e.preventDefault()
          setIsDragging(true)
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault()
          setIsDragging(false)
          const file = e.dataTransfer.files[0]
          handleFileChange(file)
        }}
      >
        <input
          type="file"
          accept={accept}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={(e) => {
            const file = e.target.files?.[0]
            if (file) handleFileChange(file)
          }}
        />
        
        {value ? (
          <div className="w-full h-32 flex items-center justify-center">
            <div
              className="w-24 h-24"
              dangerouslySetInnerHTML={{ __html: value }}
            />
          </div>
        ) : (
          <div className="text-center">
            <svg
              className="mx-auto h-12 w-12 text-[rgb(var(--text-secondary))]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <p className="mt-2 text-sm text-[rgb(var(--text-secondary))]">
              Drag and drop or click to upload
            </p>
          </div>
        )}
      </div>
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  )
} 