import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { getProductQueries } from "./products.types";

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<any, getProductQueries>({
      query: ({ limit = 0, sort = "asc", category = "" }) =>
        `products${
          category ? `/category/${category}` : ""
        }?sort=${sort}&limit=${limit}`,
    }),
    getProductCategories: builder.query<any, void>({
      query: () => `products/categories`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductCategoriesQuery } =
  productsApi;
