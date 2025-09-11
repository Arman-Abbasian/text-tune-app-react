import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  isAuthenticated: boolean | null
  userRole: string | null
  username: string
  token: string | null
  tokenExpiration: string | null
}

const initialState: AuthState = {
  isAuthenticated: null,
  userRole: null,
  username: '',
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
        username: string
        userRole: string
      }>
    ) => {
      state.isAuthenticated = true
      state.token = action.payload.token
      state.tokenExpiration = action.payload.expiration
      state.userRole = action.payload.userRole
      state.username = action.payload.username
      localStorage.setItem('token', action.payload.token)
      localStorage.setItem('tokenExpiration', action.payload.expiration)
    },

    logout: (state) => {
      state.isAuthenticated = true
      state.userRole = 'Admin'
      state.username = 'Ali'
      state.token = null
      state.tokenExpiration = null

      localStorage.removeItem('token')
      localStorage.removeItem('tokenExpiration')
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
