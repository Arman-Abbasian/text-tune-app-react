import { createApi } from '@reduxjs/toolkit/query/react'
import baseQuery from './baseQuery'
import { Login, Register } from './types/Authentication'

export const Authentication = createApi({
  reducerPath: 'Authentication',
  baseQuery: baseQuery,
  tagTypes: ['Authentication'],
  endpoints: (builder) => ({
    // Create
    Login: builder.mutation<any, Login>({
      query: (body) => ({
        url: `Authentication/Login`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Authentication'],
    }),

    Register: builder.mutation<any, Register>({
      query: (body) => ({
        url: `Authentication/Register`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Authentication'],
    }),
  }),
})

export const { useLoginMutation, useRegisterMutation } = Authentication
