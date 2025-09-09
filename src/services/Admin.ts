import { createApi } from '@reduxjs/toolkit/query/react'
import baseQuery from './baseQuery'
import type {
  AddOrUpdateTrainingTexts,
  ConfirmOrUnconfirmedTrainingVoice,
  GetFilteredTrainingTexts,
} from './types/Admin'

export const Admin = createApi({
  reducerPath: 'Admin',
  baseQuery: baseQuery,
  tagTypes: ['Admin'],
  endpoints: (builder) => ({
    // Create
    AddOrUpdateTrainingTexts: builder.mutation<any, AddOrUpdateTrainingTexts>({
      query: (body) => ({
        url: `Admin/AddOrUpdateTrainingTexts`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Admin'],
    }),
    //Update
    ConfirmOrUnconfirmedTrainingVoice: builder.mutation<
      any,
      ConfirmOrUnconfirmedTrainingVoice
    >({
      query: ({ id, isConfirmed, confirmationDescription }) => {
        const params = new URLSearchParams()

        params.append('id', id)

        if (isConfirmed !== undefined) {
          params.append('isConfirmed', isConfirmed.toString())
        }

        if (confirmationDescription) {
          params.append('confirmationDescription', confirmationDescription)
        }

        return {
          url: `Admin/ConfirmOrUnconfirmedTrainingVoice?${params}`,
          method: 'POST',
        }
      },
      invalidatesTags: ['Admin'],
    }),
    //Read
    GetFilteredTrainingTexts: builder.query<any, GetFilteredTrainingTexts>({
      query: ({
        isConfirmedVoice,
        isActiveText,
        searchText,
        shouldFilteredVoiceDateTime,
        startDateTime,
        endDateTime,
      }) => {
        const params = new URLSearchParams()

        if (isConfirmedVoice !== 'null') {
          params.append('isConfirmedVoice', isConfirmedVoice)
        }

        if (isActiveText) {
          params.append('isActiveText', String(isActiveText))
        }

        if (searchText !== '') {
          params.append('searchText', searchText.toString())
        }

        params.append(
          'shouldFilteredVoiceDateTime',
          String(shouldFilteredVoiceDateTime)
        )

        if (startDateTime) {
          params.append('startDateTime', startDateTime)
        }
        if (endDateTime) {
          params.append('endDateTime', endDateTime)
        }

        return {
          url: `GetFilteredTrainingTexts?${params.toString()}`,
          method: 'GET',
        }
      },
      providesTags: ['Admin'],
    }),
  }),
})

export const {
  useAddOrUpdateTrainingTextsMutation,
  useConfirmOrUnconfirmedTrainingVoiceMutation,
  useGetFilteredTrainingTextsQuery,
  useLazyGetFilteredTrainingTextsQuery,
} = Admin
