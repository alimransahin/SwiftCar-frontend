import { IUser, IUserInfo } from "../../utils/interface";
import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder: any) => ({
    // Sign in user
    signin: builder.mutation({
      query: (userInfo: IUserInfo) => ({
        url: "/auth/signin",
        method: "POST",
        body: userInfo,
      }),
    }),

    // Signup user
    signup: builder.mutation({
      query: (userInfo: IUser) => ({
        url: "/auth/signup",
        method: "POST",
        body: userInfo,
      }),
    }),
    // Update user
    updateProfile: builder.mutation({
      query: (userInfo: Partial<IUser>) => ({
        url: "/auth/update-profile", // Replace with your actual API endpoint
        method: "PUT",
        body: userInfo,
      }),
    }),

    getUserByEmail: builder.query({
      query: (email: any) => `users/email/${email}`,
    }),
    // Forgot password mutation
    forgotPassword: builder.mutation({
      query: (email: { email: string }) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body: email,
      }),
    }),
  }),
});

export const {
  useSignupMutation,
  useSigninMutation,
  useForgotPasswordMutation,
  useUpdateProfileMutation,
  useGetUserByEmailQuery,
} = authApi;

export default authApi;
