import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  isAuthenticated: boolean | null
  userRole: 'User' | 'Admin' | null
  username: string
  token: string | null
}

const initialState: AuthState = {
  isAuthenticated: null,
  userRole: null,
  username: '',
  token: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        token: string
        userName: string
        role: 'Admin' | 'User'
      }>
    ) => {
      state.isAuthenticated = true
      state.token = action.payload.token
      state.userRole = action.payload.role
      state.username = action.payload.userName
      localStorage.setItem('token', action.payload.token)
      localStorage.setItem('userRole', action.payload.role)
      localStorage.setItem('username', action.payload.userName)
    },

    logout: (state) => {
      state.isAuthenticated = false
      state.userRole = null
      state.username = ''
      state.token = null

      localStorage.removeItem('token')
      localStorage.removeItem('userRole')
      localStorage.removeItem('username')
    },

    checkAuthFromStorage: (state) => {
      const token = localStorage.getItem('token')
      const userRole = localStorage.getItem('userRole') as 'User' | 'Admin'

      const username = localStorage.getItem('username')

      if (token && userRole) {
        state.token = token
        state.userRole = userRole || null
        state.username = username || ''
        state.isAuthenticated = true
      } else {
        authSlice.caseReducers.logout(state)
      }
    },
  },
})

export const { login, logout, checkAuthFromStorage } = authSlice.actions
export default authSlice.reducer
