import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import { baseApi } from "./api/baseApi";
import productSlice from "./features/productSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    cart: cartReducer,
    products: productSlice,
  },

  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
