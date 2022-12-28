import { ThunkAction, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { Action } from "redux";
import cart from "../slices/cart";
import { createWrapper } from "next-redux-wrapper";
import favorites from "../slices/favorites";
import { productsApi } from "@/services/products";

const store = configureStore({
  reducer: {
    cart,
    favorites,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

const makeStore = () => store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const AppDispatch = () => useDispatch<AppDispatchType>(); //

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
