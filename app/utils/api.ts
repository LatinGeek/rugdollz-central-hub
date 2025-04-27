import { useAuth } from '../contexts/AuthContext'

interface ApiRequestOptions extends RequestInit {
  requireAuth?: boolean
}

export function useApi() {
  const auth = useAuth()

  const apiRequest = async <T>(
    endpoint: string,
    options: ApiRequestOptions = {}
  ): Promise<T> => {
    const { requireAuth = true, ...fetchOptions } = options
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    }

    if (requireAuth) {
      if (!auth.isAuthenticated) {
        throw new Error('Authentication required')
      }

      // Sign the request timestamp
      const timestamp = Date.now().toString()
      const signature = await auth.signMessage(timestamp)

      headers['X-Auth-Address'] = auth.user?.address
      headers['X-Auth-Timestamp'] = timestamp
      headers['X-Auth-Signature'] = signature
    }

    const response = await fetch(endpoint, {
      ...fetchOptions,
      headers,
    })

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`)
    }

    return response.json()
  }

  return { apiRequest }
}

// Example usage:
// const { apiRequest } = useApi()
// const data = await apiRequest<YourDataType>('/api/endpoint', {
//   method: 'POST',
//   body: JSON.stringify({ ... }),
// }) 