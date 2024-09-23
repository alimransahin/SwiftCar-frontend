import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../utils/interface";

const initialState: IUser = {
  name: "",
  email: "",
  role: "user",
  password: "",
  cpassword: "",
  phone: "",
  address: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setFormField: (
      state,
      action: PayloadAction<{ field: keyof IUser; value: string }>
    ) => {
      state[action.payload.field] = action.payload.value;
    },
    resetForm: () => initialState,
  },
});

export const { setFormField, resetForm } = authSlice.actions;
export default authSlice.reducer;
