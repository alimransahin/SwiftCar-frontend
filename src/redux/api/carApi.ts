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
    updateCar: builder.mutation({
      query: ({ id, data }: { id: string; data: Partial<ICar> }) => {
        console.log("Updating Car:", { id, data });
        return {
          url: `/cars/${id}`,
          method: "PUT",
          body: data,
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
  useUpdateCarMutation,
} = carApi;
