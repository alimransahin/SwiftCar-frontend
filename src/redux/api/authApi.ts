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
    updateUserProfile: builder.mutation({
      query: ({ id, userInfo }: { id: string; userInfo: Partial<IUser> }) => ({
        url: `/user/update-profile/${id}`, // Replace with your actual API endpoint
        method: "PUT",
        body: userInfo,
      }),
    }),
    getUserByEmail: builder.query({
      query: (email: any) => `user/${email}`,
    }),
    // Forgot password mutation
    forgotPassword: builder.mutation({
      query: (email: { email: string }) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body: email,
      }),
    }),
    //get all user
    getAllUsers: builder.query({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    //update user
    updateUser: builder.mutation({
      query: ({ id, status }: { id: string; status: string }) => {
        return {
          url: `/user/${id}`,
          method: "PUT",
          body: { status },
        };
      },
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useSignupMutation,
  useSigninMutation,
  useForgotPasswordMutation,
  useUpdateUserProfileMutation,
  useGetUserByEmailQuery,
  useGetAllUsersQuery,
  useUpdateUserMutation,
} = authApi;

export default authApi;
