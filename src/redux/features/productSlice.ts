import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  searchQuery: string;
  selectedCategory: string;
  priceRange: string;
  sortOption: string;
}

const initialState: FilterState = {
  searchQuery: "",
  selectedCategory: "",
  priceRange: "0-1000",
  sortOption: "default", // Default sorting value
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    setPriceRange: (state, action: PayloadAction<string>) => {
      state.priceRange = action.payload;
    },
    setSortOption: (state, action: PayloadAction<string>) => {
      state.sortOption = action.payload;
    },
    clearFilters: (state) => {
      state.searchQuery = "";
      state.selectedCategory = "";
      state.priceRange = "0-1000";
      state.sortOption = "default";
    },
  },
});

export const {
  setSearchQuery,
  setSelectedCategory,
  setPriceRange,
  setSortOption,
  clearFilters,
} = productSlice.actions;

export default productSlice.reducer;
