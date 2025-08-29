import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../../stores/store";
import { API_URL } from "../../utils/utilsFunctions";

interface MenuState {
  menu: IMenuItem[];
  isMenuFetched: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface IMenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
}

const initialState: MenuState = {
  menu: [],
  isMenuFetched: false,
  isLoading: false,
  error: null,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenu: (state, action: PayloadAction<IMenuItem[]>) => {
      state.menu = action.payload;
      state.isMenuFetched = true;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export function fetchMenu() {
  return async (dispatch: AppDispatch) => {
    const fetchData = async () => {
      const res = await fetch(`${API_URL}/meals`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      });

      if (!res.ok) {
        throw new Error("Could not fetch menu data!");
      }

      const data = await res.json();

      return data;
    };

    try {
      dispatch(setLoading(true));
      const menuData = await fetchData();
      dispatch(setMenu(menuData));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(setError(error.message || null));
      } else {
        dispatch(setError("Could not fetch menu data!"));
      }
    } finally {
      dispatch(setLoading(false));
    }
  };
}

export const { setError, setMenu, setLoading } = menuSlice.actions;

export default menuSlice.reducer;
