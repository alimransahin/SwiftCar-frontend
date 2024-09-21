import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// Define the initial state using that type
const initialState = {
  products: [] as any,
  selectedItems: 0,
  totalPrice: 0,
  tax: 0,
  grandTotal: 0,
  taxRate: 0.1,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isExist = state.products.find(
        (product: any) => product._id === action.payload._id
      );
      if (!isExist) {
        state.products.push({ ...action.payload, quantity: 1 });
        toast.success("Product Added to cart");
      } else {
        toast.info("This product already added in your cart");
      }
      updatePrice(state);
    },
    updateQuantity: (state, action) => {
      state.products.map((product: any) => {
        if (product._id === action.payload._id) {
          if (action.payload.type === "increment") {
            product.quantity += 1;
          } else if (action.payload.type === "decrement") {
            product.quantity -= 1;
          }
        }
      });

      updatePrice(state);
    },
    deleteProduct: (state, action) => {
      const productId = action.payload._id;
      console.log(productId);
      state.products = state.products.filter(
        (product: any) => product._id !== productId
      );
      updatePrice(state);
    },
    clearcart: (state) => {
      state.products = [];
      updatePrice(state);
    },
  },
});
export const selectSelectedItems = (state: any) =>
  state.products.reduce((total: number, product: any) => {
    return Number(total + product.quantity);
  }, 0);

export const selectTotalPrice = (state: any) =>
  state.products.reduce((total: number, product: any) => {
    return Number(
      total + (product.offerPrice || product.regularPrice) * product.quantity
    );
  }, 0);
export const updatePrice = (state: any) => {
  state.selectedItems = selectSelectedItems(state);
  state.totalPrice = selectTotalPrice(state);
  state.tax = setTotalTax(state);
  state.grandTotal = setGrandTotal(state);
};
export const setTotalTax = (state: any) =>
  selectTotalPrice(state) * state.taxRate;

export const setGrandTotal = (state: any) =>
  selectTotalPrice(state) + setTotalTax(state);

export const { addToCart, updateQuantity, deleteProduct, clearcart } =
  cartSlice.actions;

export default cartSlice.reducer;
