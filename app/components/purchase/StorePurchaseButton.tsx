import { Loader } from "lucide-react"

interface StorePurchaseButtonProps {
  buttonClassName?: string
  disabled?: boolean
  isLoading?: boolean
  onClick: () => void
  loadingText?: string
}

export function StorePurchaseButton({ 
  buttonClassName = '', 
  disabled = false, 
  isLoading = false,
  onClick,
  loadingText = 'Confirming...'
}: StorePurchaseButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={buttonClassName}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Loader className="w-4 h-4 mr-2 animate-spin" />
          {loadingText}
        </div>
      ) : (
        'Confirm Purchase'
      )}
    </button>
  )
} 