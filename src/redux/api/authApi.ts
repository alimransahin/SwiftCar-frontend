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
} = authApi;

export default authApi;
