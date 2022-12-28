import { Product } from "@/components/Product";
import { ProductType } from "@/types/product";
import styles from "./favorites.module.scss";
import { useAppSelector } from "@/redux/store";

export default function Favorites() {
  const favoriteProducts = useAppSelector((state) => state.favorites.products);

  return (
    <div className={styles.products}>
      {favoriteProducts?.map((favorite: ProductType) => (
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
