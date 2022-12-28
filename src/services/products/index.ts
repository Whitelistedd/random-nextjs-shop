import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { CategoryType } from "@/types/category";
import { HYDRATE } from "next-redux-wrapper";
import { ProductType } from "@/types/product";
import { getProductQueries } from "./products.types";

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_APP_API_URL,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getProducts: builder.query<Array<ProductType>, getProductQueries>({
      query: ({ limit = 0, sort = "asc", category = "" }) =>
        `products${
          category ? `/category/${category}` : ""
        }?sort=${sort}&limit=${limit}`,
    }),
    getProductCategories: builder.query<Array<CategoryType>, void>({
      query: () => `products/categories`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductCategoriesQuery } =
  productsApi;
