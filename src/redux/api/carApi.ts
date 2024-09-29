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
      providesTags: ["car"],
    }),

    // getSingleCar
    getSingleCar: builder.query({
      query: (id: string) => ({
        url: `/cars/${id}`,
        method: "GET",
      }),
      // invalidatesTags: (id: string) => [{ type: "Cars", id }], // This will cache the car by its ID
      providesTags: ["car"],
    }),

    //  delete car
    deleteCar: builder.mutation({
      query: (id: string) => ({
        url: `/cars/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["car"],
    }),

    // add car
    addCars: builder.mutation({
      query: (data: ICar) => {
        return {
          url: "/cars",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["car"],
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
      invalidatesTags: ["car"],
    }),
  }),
});

export const {
  useGetFilteredCarQuery,
  useGetSingleCarQuery,
  useDeleteCarMutation,
  useAddCarsMutation,
  useEditCarsMutation,
} = carApi;
