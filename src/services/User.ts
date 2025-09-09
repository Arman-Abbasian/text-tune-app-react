import { createApi } from '@reduxjs/toolkit/query/react'
import baseQuery from './baseQuery'
import type { GetFilteredTrainingTextsWithCurrentUserVoice } from './types/User'

export const User = createApi({
  reducerPath: 'User',
  baseQuery: baseQuery,
  tagTypes: ['User'],
  endpoints: (builder) => ({
    // Create

    AddOrUpdateTrainingTextVoices: builder.mutation<any, FormData>({
      query: (formData) => ({
        url: `User/AddOrUpdateTrainingTextVoices`,
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['User'],
    }),

    GetFilteredTrainingTextsWithCurrentUserVoice: builder.query<
      any,
      GetFilteredTrainingTextsWithCurrentUserVoice
    >({
      query: ({ isActiveText, isConfirmedVoice }) => {
        const params = new URLSearchParams()

        params.append('isActiveText', String(isActiveText))

        if (isConfirmedVoice !== 'null') {
          params.append('isConfirmed', isConfirmedVoice)
        }
        return {
          url: `User/GetFilteredTrainingTextsWithCurrentUserVoice?${params}`,
          method: 'POST',
        }
      },
      providesTags: ['User'],
    }),

    GetFilteredTrainingVoices: builder.query<any, void>({
      query: () => {
        return {
          url: `User/GetFilteredTrainingVoices`,
          method: 'POST',
        }
      },
      providesTags: ['User'],
    }),
  }),
})

export const {
  useAddOrUpdateTrainingTextVoicesMutation,
  useGetFilteredTrainingVoicesQuery,
  useGetFilteredTrainingTextsWithCurrentUserVoiceQuery,
  useLazyGetFilteredTrainingTextsWithCurrentUserVoiceQuery,
} = User
