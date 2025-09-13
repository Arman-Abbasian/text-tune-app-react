//libraries
import { createApi } from "@reduxjs/toolkit/query/react";
//store
import baseQuery from "./baseQuery";
//types
import type { Login, LoginRes, Register } from "./types/Authentication";
import type { ApiResponse } from "./types/globalSerivicesType";

export const Authentication = createApi({
  reducerPath: "Authentication",
  baseQuery: baseQuery,
  tagTypes: ["Authentication"],
  endpoints: (builder) => ({
    // Create
    Login: builder.mutation<ApiResponse<LoginRes>, Login>({
      query: (body) => ({
        url: `Authentication/Login`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Authentication"],
    }),

    Register: builder.mutation<any, Register>({
      query: (body) => ({
        url: `Authentication/Register`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Authentication"],
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = Authentication;
