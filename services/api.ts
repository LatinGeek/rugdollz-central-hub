const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'

interface ApiResponse<T> {
  data?: T
  error?: string
}

async function handleResponse<T>(response: Response): Promise<ApiResponse<T>> {
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'An error occurred' }))
    return { error: error.message }
  }
  const data = await response.json()
  return { data }
}

export async function get<T>(endpoint: string): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return handleResponse<T>(response)
  } catch (error) {
    console.error(error);
    return { error: 'Network error' }
  }
}

export async function post<T, B = unknown>(endpoint: string, body: B): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    return handleResponse<T>(response)
  } catch (error) {
    console.error(error);
    return { error: 'Network error' }
  }
}

export async function put<T, B = unknown>(endpoint: string, body: B): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    return handleResponse<T>(response)
  } catch (error) {
    console.error(error);
    return { error: 'Network error' }
  }
}

export async function del<T>(endpoint: string): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return handleResponse<T>(response)
  } catch (error) {
    console.error(error);
    return { error: 'Network error' }
  }
} 