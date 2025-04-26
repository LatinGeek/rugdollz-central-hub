export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}

export interface ApiError {
  code: string
  message: string
  details?: Record<string, unknown>
} 