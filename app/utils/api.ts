import { useAuthService } from '@/services/auth'
import { useAuth } from '../contexts/AuthContext'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'

interface ApiResponse<T> {
  data?: T
  error?: string
}

interface ApiRequestOptions extends RequestInit {
  requireAuth?: boolean
}



export function useApi() {
  const auth = useAuth()
  const { getAuthToken } = useAuthService();

  const handleResponse = async <T>(response: Response): Promise<ApiResponse<T>> => {
    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'An error occurred' }))
      return { error: error.message }
    }
    const data = await response.json()
    return { data }
  }



  const getAuthHeaders = async (requireAuth: boolean): Promise<HeadersInit> => {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    }

    if (requireAuth) {
      if (!auth.isAuthenticated || !auth.user?.address) {
        throw new Error('Authentication required')
      }

      try {
        const token = await getAuthToken(auth.user.address )
        headers['Authorization'] = `Bearer ${token}`
      } catch (error) {
        console.error('Failed to get auth token:', error)
        throw new Error('Authentication failed')
      }
    }

    return headers
  }

  const request = async <T>(
    endpoint: string,
    options: ApiRequestOptions = {}
  ): Promise<ApiResponse<T>> => {
    try {
      const { requireAuth = true, ...fetchOptions } = options
      const headers = await getAuthHeaders(requireAuth)

      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...fetchOptions,
        headers: {
          ...headers,
          ...options.headers,
        },
      })

      return handleResponse<T>(response)
    } catch (error) {
      console.error(error)
      return { error: error instanceof Error ? error.message : 'Network error' }
    }
  }

  return {
    get: <T>(endpoint: string, options?: ApiRequestOptions) => 
      request<T>(endpoint, { ...options, method: 'GET' }),
    
    post: <T, B = unknown>(endpoint: string, body: B, options?: ApiRequestOptions) =>
      request<T>(endpoint, { ...options, method: 'POST', body: JSON.stringify(body) }),
    
    put: <T, B = unknown>(endpoint: string, body: B, options?: ApiRequestOptions) =>
      request<T>(endpoint, { ...options, method: 'PUT', body: JSON.stringify(body) }),
    
    del: <T>(endpoint: string, options?: ApiRequestOptions) =>
      request<T>(endpoint, { ...options, method: 'DELETE' }),
  }
}

// Example usage:
// const { get, post, put, del } = useApi()
// 
// // Get data
// const { data, error } = await get<UserProfile>('/users/profile')
// 
// // Post data with authentication
// const response = await post<ResponseType, RequestType>('/users/profile', {
//   name: 'John',
//   // ... other data
// })
// 
// // Make unauthenticated request
// const publicData = await get<PublicData>('/public-endpoint', { requireAuth: false }) 