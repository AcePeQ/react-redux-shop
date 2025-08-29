import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../../stores/store";
import { ICartItem } from "../Cart/cartSlice";
import { ShipmentFormData } from "../Cart/cartProgressSlice";
import { API_URL } from "../../utils/utilsFunctions";

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
    clearOrder: (state) => {
      state.orderStatus = "idle";
      state.error = null;
    },
  },
});

export const { setOrderStatus, setPending, setError, clearOrder } =
  orderSlice.actions;

export function orderMeal(order: TOrder) {
  return async (dispatch: AppDispatch) => {
    const sendOrder = async () => {
      const res = await fetch(`${API_URL}/order`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(order),
      });

      if (!res.ok) {
        throw new Error("Could not send your order");
      }

      const data = await res.json();

      return data;
    };

    try {
      dispatch(setOrderStatus("pending"));
      dispatch(setPending(true));
      await sendOrder();
      dispatch(setOrderStatus("success"));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(setError(error.message || null));
        dispatch(setOrderStatus("error"));
      } else {
        dispatch(setError("Could not fetch menu data!"));
        dispatch(setOrderStatus("error"));
      }
    } finally {
      dispatch(setPending(false));
    }
  };
}

export default orderSlice.reducer;
