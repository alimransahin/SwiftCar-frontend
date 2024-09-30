import { ICar } from "../../utils/interface";
import { baseApi } from "./baseApi";

const bookApi = baseApi.injectEndpoints({
  endpoints: (builder: any) => ({
    // all booking
    getAllBookings: builder.query({
      query: () => ({
        url: "bookings",
        method: "GET",
      }),
      providesTags: ["booking"],
    }),
    // my booking
    GetUserBookings: builder.query({
      query: () => ({
        url: "bookings/my-bookings",
        method: "GET",
      }),
      providesTags: ["booking"],
    }),
    // book car
    bookCars: builder.mutation({
      query: (data: any) => {
        return {
          url: "/bookings",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["booking"],
    }),

    makePayment: builder.mutation({
      query: ({
        id,
        currentPageLink,
      }: {
        id: string;
        currentPageLink: string;
      }) => ({
        url: `/bookings/${id}`,
        method: "POST",
        body: {
          currentPageLink,
        },
      }),
      invalidatesTags: ["booking"],
    }),
  }),
});

export const {
  useGetUserBookingsQuery,
  useBookCarsMutation,
  useGetAllBookingsQuery,
  useMakePaymentMutation,
} = bookApi;
