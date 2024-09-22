import { ICar } from "../../utils/interface";
import { baseApi } from "./baseApi";

const carApi = baseApi.injectEndpoints({
  endpoints: (builder: any) => ({
    // getCar
    getFilteredCar: builder.query({
      query: () => ({
        url: "/cars",
        method: "GET",
      }),
      providesTags: ["Car"],
    }),

    // getSingleCar
    getSingleCar: builder.query({
      query: (id: string) => ({
        url: `/cars/${id}`,
        method: "GET",
      }),
      providesTags: (id: string) => [{ type: "Cars", id }], // This will cache the car by its ID
    }),

    // getCar
    getAllCar: builder.query({
      query: () => ({
        url: "/manage",
        method: "GET",
      }),
      providesTags: ["Cars"],
    }),

    //  delete car
    deleteCar: builder.mutation({
      query: (id: string) => ({
        url: `/manage/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cars"], // This will invalidate the cache for cars
    }),

    // add car
    addCars: builder.mutation({
      query: (data: ICar) => {
        return {
          url: "/manage",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Cars"],
    }),
    // Edit car
    editCars: builder.mutation({
      query: ({
        id,
        updatedCar,
      }: {
        id: string;
        updatedCar: Partial<ICar>;
      }) => {
        return {
          url: `/manage/${id}`,
          method: "PUT",
          body: updatedCar,
        };
      },
      invalidatesTags: ["Cars"],
    }),
  }),
});

export const {
  useGetFilteredCarQuery,
  useGetSingleCarQuery,
  useGetAllCarQuery,
  useDeleteCarMutation,
  useAddCarsMutation,
  useEditCarsMutation,
} = carApi;
