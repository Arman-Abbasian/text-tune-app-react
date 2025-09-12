import { createApi } from '@reduxjs/toolkit/query/react'
import baseQuery from './baseQuery'
import type { ApiResponse } from './types/globalSerivicesType'
import type { GetUserInfo } from './types/Home'

export const Home = createApi({
  reducerPath: 'Home',
  baseQuery: baseQuery,
  tagTypes: ['Home'],
  endpoints: (builder) => ({
    // Read

    GetUserInfo: builder.query<ApiResponse<GetUserInfo>, void>({
      query: () => {
        return {
          url: `Home/GetUserInfo`,
          method: 'POST',
        }
      },
      providesTags: ['Home'],
    }),
  }),
})

export const { useGetUserInfoQuery } = Home
