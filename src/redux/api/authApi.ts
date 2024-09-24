import { IUser, IUserInfo } from "../../utils/interface";
import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder: any) => ({
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
  }),
});

export const { useSignupMutation, useSigninMutation } = authApi;

export default authApi;
