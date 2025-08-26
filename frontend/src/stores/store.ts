import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../features/Menu/menuSlice";
import cartReducer from "../features/Cart/cartSlice";
import progressReducer from "../features/Cart/cartProgressSlice";
import orderReducer from "../features/Summary/orderSlice";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    cart: cartReducer,
    progress: progressReducer,
    order: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
