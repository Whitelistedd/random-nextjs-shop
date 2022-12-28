import {
  productsApi,
  useGetProductCategoriesQuery,
  useGetProductsQuery,
} from "@/services/products";

import { CategoryType } from "@/types/category";
import { Navbar } from "@/components/Navbar";
import { Product } from "@/components/Product";
import { ProductType } from "@/types/product";
import { Section } from "@/components/Section";
import styles from "./index.module.scss";
import { useState } from "react";
import { wrapper } from "@/redux/store";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortingMethod, setSortingMethod] = useState("asc");
  const { data, error, isLoading } = useGetProductsQuery({
    limit: 0,
    sort: sortingMethod,
    category: selectedCategory,
  });

  const categories = useGetProductCategoriesQuery();

  return (
    <>
      {isLoading || categories.isLoading ? (
        <p>Loading....</p>
      ) : (
        <>
          <label>Sorting:</label>
          <select onChange={(e) => setSortingMethod(e.target.value)}>
            <option value={"asc"}>asc</option>
            <option value={"desc"}>desc</option>
          </select>
          <label>Category:</label>
          <select onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value={""}>all </option>
            {categories?.data?.map((category: CategoryType) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <div className={styles.products}>
            <Section />
            {data?.map((product: ProductType) => (
              <Product
                id={product.id}
                category={product.category}
                description={product.description}
                rating={product.rating}
                image={product.image}
                title={product.title}
                price={product.price}
                key={product.id}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    await store.dispatch(
      productsApi.endpoints.getProducts.initiate({
        limit: 0,
        sort: "asc",
        category: "all",
      })
    );

    await store.dispatch(productsApi.endpoints.getProductCategories.initiate());

    await Promise.all(
      store.dispatch(productsApi.util.getRunningQueriesThunk())
    );

    return {
      props: {},
    };
  }
);
