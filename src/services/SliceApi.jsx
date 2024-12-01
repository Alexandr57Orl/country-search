// src/api/apiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, ALL_COUNTRIES } from "../config";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => ALL_COUNTRIES,
    }),
  }),
});

export const { useGetCountriesQuery } = apiSlice;
