'use client'

import { StoreItem } from '@/types/Entities/store-item'
import { OrderStatusType } from '@/types/enums/order-status'
import Image from 'next/image'


interface Detail {
  label: string
  value: string | number
  format?: 'date' | 'currency' | 'number' | 'text'
  currency?: string
}

interface DetailSection {
  label: string
  details: Detail[]
}

interface TransactionInfoProps {
  title: string
  description: string
  item?: StoreItem
  imageUrl?: string
  status: OrderStatusType
  onStatusChange: (status: OrderStatusType) => void
  details: DetailSection[],
  showStatusChange: boolean,
  children?: React.ReactNode
}

export function TransactionInfo({ 
  title, 
  description, 
  item, 
  imageUrl,
  status,   
  onStatusChange, 
  details,
  showStatusChange,
  children

}: TransactionInfoProps) {
  const formatValue = (value: string | number, format?: string, currency?: string) => {
    if (format === 'date') {
      return new Date(value).toLocaleDateString()
    }
    if (format === 'currency') {
      return `${value} ${currency || 'ETH'}`
    }
    if (format === 'number') {
      return value.toLocaleString()
    }
    return value
  }

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* NFT Image */}
      <div className="relative w-full md:w-64 h-64 flex-shrink-0">
        <Image
          src={item?.imageUrl ?? imageUrl ?? "" }
          alt={item?.name ?? imageUrl ?? ""}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Transaction Info */}
      <div className="flex-1 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-[rgb(var(--text-primary))]">
              {title}
            </h2>
            <p className="text-[rgb(var(--text-secondary))] mt-1">
              {description}
            </p>
          </div>
          {showStatusChange && (
            <div className="flex items-center gap-4">
              <select
                value={status}
                onChange={(e) => onStatusChange(e.target.value as 'pending' | 'delivered' | 'cancelled')}
              className="bg-[rgb(var(--bg-light))] text-[rgb(var(--text-primary))] border border-[rgb(var(--border-dark))] rounded-lg px-4 py-3 text-md"
            >
              <option value="pending">Pending</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>)}
          {children}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {details.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-medium text-[rgb(var(--text-primary))] mb-2">{section.label}</h3>
              <div className="space-y-2 text-sm text-[rgb(var(--text-secondary))]">
                {section.details.map((detail, detailIndex) => (
                  <p key={detailIndex}>
                    {detail.label}: {formatValue(detail.value, detail.format, detail.currency)}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 