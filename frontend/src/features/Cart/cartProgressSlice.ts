import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ShipmentFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  city: string;
  zipCode: string;
}

interface ProgressState {
  currentStep: number;
  userShippment: ShipmentFormData | null;
}

const initialState: ProgressState = {
  currentStep: 0,
  userShippment: null,
};

const cartProgressSlice = createSlice({
  name: "cartProgress",
  initialState,
  reducers: {
    changeStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },

    saveUserShipment: (
      state,
      action: PayloadAction<ShipmentFormData | null>
    ) => {
      state.userShippment = action.payload;
    },
  },
});

export const { changeStep, saveUserShipment } = cartProgressSlice.actions;

export default cartProgressSlice.reducer;
