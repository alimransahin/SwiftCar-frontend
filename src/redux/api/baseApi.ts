import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",

  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:5000/api",
    baseUrl: "https://rent-car-red.vercel.app/api/",
    prepareHeaders: (headers) => {
      // Get the token from localStorage
      const token = localStorage.getItem("accessToken");

      // If the token exists, set it in the headers as Bearer token
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});
