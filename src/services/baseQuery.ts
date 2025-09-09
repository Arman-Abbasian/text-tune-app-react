import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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
const baseQuery = fetchBaseQuery({
  baseUrl: window.APP_CONFIG.API_BASE_URL,
  credentials: 'include',
  prepareHeaders: (headers) => {
    return headers
  },
})

export default baseQuery
