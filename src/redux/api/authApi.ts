import { IUser } from "../../utils/interface";
import { baseApi } from "./baseApi";

// Define your User type (could vary depending on your backend)

const authApi = baseApi.injectEndpoints({
  endpoints: (builder: any) => ({
    // Signup user
    signup: builder.mutation({
      query: (data: IUser) => ({
        url: "/auth/signup",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"], // Invalidate any cached user data
    }),

    // Login user
    signin: builder.mutation({
      query: (data: { email: string; password: string }) => ({
        url: "/auth/signin",
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["User"], // Invalidate any cached user data
    }),

    // Get current user (e.g., from a token or session)
    getCurrentUser: builder.query({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
      providesTags: ["User"], // Cache the current user data
    }),

    // Logout user
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["User"], // Invalidate the user data cache after logging out
    }),
  }),
});

export const {
  useSignupMutation,
  useSigninMutation,
  useGetCurrentUserQuery,
  useLogoutMutation,
} = authApi;

export default authApi;
