import { IProduct } from "../../components/utils/interface";
import { baseApi } from "./baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder: any) => ({
    // getProduct
    getFilteredProduct: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      providesTags: ["Products"],
    }),

    // getSingleProduct
    getSingleProduct: builder.query({
      query: (id: string) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
      providesTags: (id: string) => [{ type: "Products", id }], // This will cache the product by its ID
    }),

    // getProduct
    getAllProduct: builder.query({
      query: () => ({
        url: "/manage",
        method: "GET",
      }),
      providesTags: ["Products"],
    }),

    //  delete product
    deleteProduct: builder.mutation({
      query: (id: string) => ({
        url: `/manage/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"], // This will invalidate the cache for products
    }),

    // add product
    addProducts: builder.mutation({
      query: (data: IProduct) => {
        return {
          url: "/manage",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Products"],
    }),
    // Edit product
    editProducts: builder.mutation({
      query: ({
        id,
        updatedProduct,
      }: {
        id: string;
        updatedProduct: Partial<IProduct>;
      }) => {
        return {
          url: `/manage/${id}`,
          method: "PUT",
          body: updatedProduct,
        };
      },
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetFilteredProductQuery,
  useGetSingleProductQuery,
  useGetAllProductQuery,
  useDeleteProductMutation,
  useAddProductsMutation,
  useEditProductsMutation,
} = productApi;
