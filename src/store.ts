import { configureStore } from '@reduxjs/toolkit'
import { Admin } from './services/Admin'
import { Authentication } from './services/Authentication'
import { User } from './services/User'
import authSlice from './features/authSlice'
import { Home } from './services/Home'

// import سایر slice ها

// ... بقیه سرویس‌ها

export const makeStore = () =>
  configureStore({
    reducer: {
      // reducers معمولی
      auth: authSlice,

      [User.reducerPath]: User.reducer,
      [Admin.reducerPath]: Admin.reducer,
      [Authentication.reducerPath]: Authentication.reducer,
      [Home.reducerPath]: Home.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        User.middleware,
        Admin.middleware,
        Authentication.middleware,
        Home.middleware
      ),
  })

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
