//libraries
import { createApi } from "@reduxjs/toolkit/query/react";
//store
import baseQuery from "./baseQuery";
//types
import type { GetFilteredTrainingTextsWithCurrentUserVoice } from "./types/User";
import type { AddOrUpdateTrainingTextsRes } from "./types/Admin";

export const User = createApi({
  reducerPath: "User",
  baseQuery: baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({
    // Create

    AddOrUpdateTrainingTextVoices: builder.mutation<any, FormData>({
      query: (formData) => ({
        url: `User/AddOrUpdateTrainingTextVoices`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["User"],
    }),

    GetFilteredTrainingVoices: builder.query<
      AddOrUpdateTrainingTextsRes[],
      GetFilteredTrainingTextsWithCurrentUserVoice
    >({
      query: ({ isConfirmedVoice, isActiveText = true }) => {
        const params = new URLSearchParams();

        params.append("isActiveText", String(isActiveText));
        if (isConfirmedVoice !== "null") {
          params.append("isConfirmedVoice", isConfirmedVoice);
        }
        return {
          url: `User/GetFilteredTrainingTextsWithCurrentUserVoice?${params}`,
          method: "POST",
        };
      },
      providesTags: ["User"],
    }),
  }),
});

export const {
  useAddOrUpdateTrainingTextVoicesMutation,
  useGetFilteredTrainingVoicesQuery,
  useLazyGetFilteredTrainingVoicesQuery,
} = User;
