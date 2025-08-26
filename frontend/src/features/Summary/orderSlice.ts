import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../../stores/store";
import { ICartItem } from "../Cart/cartSlice";
import { ShipmentFormData } from "../Cart/cartProgressSlice";

export type TOrder = {
  order: ICartItem[];
  shipment: ShipmentFormData;
};

type TOrderState = {
  orderStatus: string;
  isPending: boolean;
  error: string | null;
};

const initialState: TOrderState = {
  orderStatus: "idle",
  isPending: false,
  error: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrderStatus: (state, action: PayloadAction<string>) => {
      state.orderStatus = action.payload;
    },
    setPending: (state, action: PayloadAction<boolean>) => {
      state.isPending = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setOrderStatus, setPending, setError } = orderSlice.actions;

export function orderMeal(order: TOrder) {
  return async (dispatch: AppDispatch) => {
    const sendOrder = async () => {
      const res = await fetch("http://localhost:3000/order", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(order),
      });

      if (!res.ok) {
        throw new Error("Could not fetch menu data!");
      }

      const data = await res.json();

      return data;
    };

    try {
      dispatch(setPending(true));
      await sendOrder();
      dispatch(setOrderStatus("success"));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(setError(error.message || null));
      } else {
        dispatch(setError("Could not fetch menu data!"));
      }
    } finally {
      dispatch(setPending(false));
    }
  };
}

export default orderSlice.reducer;
