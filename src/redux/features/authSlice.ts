import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  email: string;
  role: string;
  password: string;
  phone: string;
  address: string;
}

const initialState: UserState = {
  name: "",
  email: "",
  role: "user",
  password: "",
  phone: "",
  address: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setFormField: (
      state,
      action: PayloadAction<{ field: keyof UserState; value: string }>
    ) => {
      state[action.payload.field] = action.payload.value;
    },
    resetForm: () => initialState,
  },
});

export const { setFormField, resetForm } = authSlice.actions;
export default authSlice.reducer;
