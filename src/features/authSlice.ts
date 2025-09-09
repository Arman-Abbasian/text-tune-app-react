import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  isAuthenticated: boolean | null
  token: string | null
  userRole: string | null
  tokenExpiration: string | null
}

const initialState: AuthState = {
  isAuthenticated: null,
  userRole: null,
  token: null,
  tokenExpiration: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        token: string
        expiration: string
        fullName: string
        mobile: string
      }>
    ) => {
      state.isAuthenticated = true
      state.token = action.payload.token
      state.tokenExpiration = action.payload.expiration
      localStorage.setItem('fullName', action.payload.fullName)
      localStorage.setItem('mobile', action.payload.mobile)
      localStorage.setItem('token', action.payload.token)
      localStorage.setItem('tokenExpiration', action.payload.expiration)
    },

    logout: (state) => {
      state.isAuthenticated = false
      state.token = null
      state.tokenExpiration = null

      localStorage.removeItem('token')
      localStorage.removeItem('tokenExpiration')
      localStorage.removeItem('fullName')
      localStorage.removeItem('mobile')
      localStorage.removeItem('cart')
    },

    checkAuthFromStorage: (state) => {
      const token = localStorage.getItem('token')
      const tokenExpiration = localStorage.getItem('tokenExpiration')

      if (token && tokenExpiration) {
        try {
          const nowTime = Date.now()
          const tokenTime = new Date(tokenExpiration).getTime()

          if (tokenTime > nowTime) {
            state.isAuthenticated = true
            state.token = token
            state.tokenExpiration = tokenExpiration
          } else {
            authSlice.caseReducers.logout(state)
          }
        } catch (error) {
          authSlice.caseReducers.logout(state)
        }
      } else {
        authSlice.caseReducers.logout(state)
      }
    },
  },
})

export const { login, logout, checkAuthFromStorage } = authSlice.actions
export default authSlice.reducer
