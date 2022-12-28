import { CartProductType, initiailCartState } from "./cart.types";

import { createSlice } from "@reduxjs/toolkit";

const initialState: initiailCartState = {
  products: [],
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      // если товар находится в корзине, то вернет true
      const inCart = state.products.find((item) =>
        item.id === action.payload.id ? true : false
      );
      if (inCart) {
        const newCart = state.products.map(
          (item: CartProductType, index: number) => {
            if (item.id === action.payload.id) {
              // изменить цену и количество на 1 шт.
              state.total += action.payload.price;
              return { ...item, quantity: item.quantity + 1 };
            } else {
              return item;
            }
          }
        );
        state.products = newCart;
      } else {
        // если товара нет в корзине, то просто добавит 1
        state.quantity += 1;
        state.products.push({ ...action.payload, quantity: 1 });
        state.total += action.payload.price * action.payload.quantity;
      }
    },
    removeProduct: (state, action) => {
      // отфильтровать товар из корзины
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (!product) return;
      const newcart = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.products = newcart;
      state.quantity -= 1;
      // если количество товаров в корзине равно 1, то просто сделайте общую сумму 0
      console.log(product);
      if (state.quantity !== 1) {
        state.total -= product.price;
      } else if (state.quantity === 1) {
        state.total = 0;
      }
    },
    handleCartQuantity: (state, action) => {
      const { type, id } = action.payload;
      const product = state.products.find((product) => product.id === id);
      if (!product) return;

      if (type === "rem" && product.quantity >= 2) {
        state.products.forEach((product) =>
          product.id === id ? (product.quantity -= 1) : product
        );
        state.total -= product.price;
      } else if (type === "add" && product.quantity >= 1) {
        state.products.forEach((product) =>
          product.id === id ? (product.quantity += 1) : product
        );
        state.total += product.price;
      }
    },
    clearCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, handleCartQuantity, removeProduct, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
