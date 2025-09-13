//libraries
import { createApi } from "@reduxjs/toolkit/query/react";
//store
import baseQuery from "./baseQuery";
//types
import type {
  AddOrUpdateTrainingTexts,
  AddOrUpdateTrainingTextsRes,
  ConfirmOrUnconfirmedTrainingVoice,
  GetFilteredTrainingTexts,
  StatisticsData,
  TrainingTextDto,
} from "./types/Admin";
import type { ApiResponse } from "./types/globalSerivicesType";

export const Admin = createApi({
  reducerPath: "Admin",
  baseQuery: baseQuery,
  tagTypes: ["Admin"],
  endpoints: (builder) => ({
    // Create
    AddOrUpdateTrainingTexts: builder.mutation<
      ApiResponse<AddOrUpdateTrainingTextsRes>,
      AddOrUpdateTrainingTexts
    >({
      query: (body) => ({
        url: `Admin/AddOrUpdateTrainingTexts`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Admin"],
    }),
    //Update
    ConfirmOrUnconfirmedTrainingVoice: builder.mutation<
      ApiResponse<void>,
      ConfirmOrUnconfirmedTrainingVoice
    >({
      query: ({ id, isConfirmed, confirmationDescription }) => {
        const params = new URLSearchParams();

        params.append("id", id);

        if (isConfirmed !== undefined) {
          params.append("isConfirmed", isConfirmed.toString());
        }

        if (confirmationDescription) {
          params.append("confirmationDescription", confirmationDescription);
        }

        return {
          url: `Admin/ConfirmOrUnconfirmedTrainingVoice?${params}`,
          method: "POST",
        };
      },
      invalidatesTags: ["Admin"],
    }),
    //Read
    GetFilteredTrainingTexts: builder.query<
      ApiResponse<TrainingTextDto>,
      GetFilteredTrainingTexts
    >({
      query: ({
        isConfirmedVoice,
        isActiveText,
        searchText,
        shouldFilteredVoiceDateTime,
        startDateTime,
        endDateTime,
      }) => {
        const params = new URLSearchParams();

        if (isConfirmedVoice !== "null") {
          params.append("isConfirmedVoice", isConfirmedVoice);
        }

        if (isActiveText) {
          params.append("isActiveText", String(isActiveText));
        }

        if (searchText !== "") {
          params.append("searchText", searchText.toString());
        }

        params.append(
          "shouldFilteredVoiceDateTime",
          String(shouldFilteredVoiceDateTime)
        );

        if (startDateTime) {
          params.append("startDateTime", startDateTime);
        }
        if (endDateTime) {
          params.append("endDateTime", endDateTime);
        }

        return {
          url: `Admin/GetFilteredTrainingTexts?${params.toString()}`,
          method: "POST",
        };
      },
      providesTags: ["Admin"],
    }),
    GetAdminLandingPageStatistics: builder.query<
      ApiResponse<StatisticsData>,
      void
    >({
      query: () => {
        return {
          url: `/Admin/GetAdminLandingPageStatistics`,
          method: "POST",
        };
      },
      providesTags: ["Admin"],
    }),
  }),
});

export const {
  useAddOrUpdateTrainingTextsMutation,
  useConfirmOrUnconfirmedTrainingVoiceMutation,
  useGetFilteredTrainingTextsQuery,
  useGetAdminLandingPageStatisticsQuery,
  useLazyGetFilteredTrainingTextsQuery,
} = Admin;
