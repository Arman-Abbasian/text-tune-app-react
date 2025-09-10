import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query'

declare global {
  interface Window {
    APP_CONFIG: {
      API_BASE_URL: string
    }
  }
  interface Navigator {
    standalone?: boolean
  }
}

// Helper function برای پاک کردن توکن
const clearTokenFromLocalStorage = (): void => {
  localStorage.removeItem('token')
  localStorage.removeItem('tokenExpiration')
}

// Helper function برای redirect به login
const redirectToLogin = (): void => {
  // جلوگیری از infinite redirect loop
  if (!window.location.pathname.includes('/auth/login')) {
    window.location.href = '/auth/login'
  }
}

const baseQuery = fetchBaseQuery({
  baseUrl: window.APP_CONFIG.API_BASE_URL,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('token')
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
  },
})

// Wrapper برای handle کردن authentication errors
const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions)

  if (result.error?.status === 401) {
    clearTokenFromLocalStorage()
    redirectToLogin()
  }

  return result
}

export default baseQueryWithReauth
