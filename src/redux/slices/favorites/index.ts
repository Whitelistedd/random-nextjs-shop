import { createSlice } from "@reduxjs/toolkit";
import { initiailCartState } from "./favorites.types";

const initialState: initiailCartState = {
  products: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      // если товар находится в products, то вернет true
      const inCart = state.products.find((item) =>
        item.id === action.payload.id ? true : false
      );
      if (!inCart) {
        state.products.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      // отфильтровать товар из корзины
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );
      console.log(product);
      if (!product) return;
      const newcart = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.products = newcart;
    },
  },
});

export const { addToFavorites, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
