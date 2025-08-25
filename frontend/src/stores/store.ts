import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../features/Menu/menuSlice";
import cartReducer from "../features/Cart/cartSlice";
import progressReducer from "../features/Cart/cartProgressSlice";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    cart: cartReducer,
    progress: progressReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
