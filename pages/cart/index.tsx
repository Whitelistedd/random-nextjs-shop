import { Product } from "@/components/Product";
import { ProductType } from "@/types/product";
import styles from "./cart.module.scss";
import { useAppSelector } from "@/redux/store";

export default function Cart() {
  const cartProducts = useAppSelector((state) => state.cart.products);

  return (
    <div className={styles.products}>
      {cartProducts?.map((favorite: ProductType) => (
        <Product
          id={favorite.id}
          image={favorite.image}
          price={favorite.price}
          rating={favorite.rating}
          title={favorite.title}
          key={favorite.id}
          category={favorite.category}
          description={favorite.description}
        />
      ))}
    </div>
  );
}
