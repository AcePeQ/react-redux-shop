import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMenuItem } from "../Menu/menuSlice";

export interface ICartItem {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  quantity: number;
}

interface CartState {
  cart: ICartItem[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IMenuItem>) => {
      const newCartItem = { ...action.payload, quantity: 1 };
      state.cart.push(newCartItem);
    },
    deleteFromCart: (state, action: PayloadAction<string>) => {
      const cartItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload
      );
      state.cart.splice(cartItemIndex, 1);
    },
    updateItemQuantity: (
      state,
      action: PayloadAction<{ id: string; amount: number }>
    ) => {
      const cartItem = state.cart.find((item) => item.id === action.payload.id);

      if (!cartItem) return;

      if (cartItem.quantity <= 1 && action.payload.amount === -1) {
        const cartItemIndex = state.cart.findIndex(
          (item) => item.id === action.payload.id
        );
        state.cart.splice(cartItemIndex, 1);
        return;
      }

      cartItem.quantity += action.payload.amount;
    },
  },
});

export const { addToCart, deleteFromCart, updateItemQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
