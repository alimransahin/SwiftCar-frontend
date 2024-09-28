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
    // getSingleCar
    // getSingleCar: builder.query({
    //   query: (id: string) => ({
    //     url: `/cars/${id}`,
    //     method: "GET",
    //   }),
    //   providesTags: (id: string) => [{ type: "Cars", id }], // This will cache the car by its ID
    // }),

    //  delete car
    // deleteCar: builder.mutation({
    //   query: (id: string) => ({
    //     url: `/manage/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["booking"], // This will invalidate the cache for cars
    // }),

    // Edit car
    // editCars: builder.mutation({
    //   query: ({
    //     id,
    //     updatedCar,
    //   }: {
    //     id: string;
    //     updatedCar: Partial<ICar>;
    //   }) => {
    //     return {
    //       url: `/manage/${id}`,
    //       method: "PUT",
    //       body: updatedCar,
    //     };
    //   },
    //   invalidatesTags: ["booking"],
    // }),
  }),
});

export const {
  useGetUserBookingsQuery,
  useBookCarsMutation,
  useGetAllBookingsQuery,
} = bookApi;
