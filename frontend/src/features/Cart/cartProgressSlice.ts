import { createSlice } from "@reduxjs/toolkit";

interface ProgressState {
  currentStep: number;
  userShippment: {
    fullName: string;
    email: string;
    street: string;
  };
}

const initialState: ProgressState = {
  currentStep: 0,
  userShippment: {
    fullName: "",
    email: "",
    street: "",
  },
};

const cartProgressSlice = createSlice({
  name: "cartProgress",
  initialState,
  reducers: {},
});

export default cartProgressSlice.reducer;
