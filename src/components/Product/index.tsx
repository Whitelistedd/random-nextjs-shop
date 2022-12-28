import { AppDispatch, useAppSelector } from "@/redux/store";
import {
  addProduct,
  handleCartQuantity,
  removeProduct,
} from "@/redux/slices/cart";
import { addToFavorites, removeFavorite } from "@/redux/slices/favorites";

import { Button } from "@/components/Button";
import { ConvertUSD } from "@/helpers/ConvertUSD";
import { HitTag } from "@/components/Tags/HitTag";
import Image from "next/image";
import { Like } from "@/components/Like";
import { ProductType } from "@/types/product";
import { Quantity } from "@/components/Quantity";
import { Rating } from "@/components/Rating";
import React from "react";
import styles from "./Product.module.scss";

interface Props {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
  rating: { rate: number; count: number };
  price: number;
}

export const Product: React.FC<Props> = ({
  id,
  image,
  title,
  category,
  price,
  description,
  rating,
}) => {
  const cartProduct = useAppSelector((state) => state.cart.products).find(
    (product) => product.id === id
  );

  const liked = useAppSelector((state) => state.favorites.products).find(
    (product) => product.id === id
  );

  const dispatch = AppDispatch();
  const handleQuantity = (id: number, type: string) => {
    if (!cartProduct) return;

    if (cartProduct.quantity === 1 && type === "rem")
      return dispatch(removeProduct({ id, type }));

    if (cartProduct.quantity >= 1)
      return dispatch(handleCartQuantity({ id, type }));
  };

  const addToCart = () => {
    if (cartProduct) return;
    dispatch(
      addProduct({
        id,
        image,
        title,
        description,
        rating,
        category,
        price,
      })
    );
  };

  const addProductToFavorites = () => {
    !liked
      ? dispatch(
          addToFavorites({
            id,
            image,
            title,
            description,
            rating,
            category,
            price,
          })
        )
      : dispatch(
          removeFavorite({
            id,
            image,
            title,
            description,
            rating,
            category,
            price,
          })
        );
  };

  return (
    <div className={styles.product}>
      <div className={styles.product_IMGContainer}>
        <Image
          className={styles.product_IMG}
          src={image}
          alt={`product Image of ${name}`}
          width="220"
          height="220"
        />
        {rating?.count >= 300 && <HitTag />}
      </div>
      <div className={styles.product_details}>
        <span className={styles.product_category}>
          {category}
          {rating.count && (
            <Rating
              rating={Math.round(rating.rate)}
              reviewsAmount={rating.count}
            />
          )}
        </span>
        <span className={styles.product_name}>{title}</span>
        <span className={styles.product_price}>
          {ConvertUSD(price)} ₽{" "}
          <span className={styles.product_amount}>/шт.</span>
        </span>
      </div>
      <div className={styles.product_actions}>
        <div className={styles.product_cartButtons}>
          <Button
            className={cartProduct && styles.product_addedButton}
            onClick={() => addToCart()}
          >
            {cartProduct ? "В корзину" : "В корзине"}
          </Button>
          {cartProduct?.quantity && (
            <Quantity
              id={id}
              className={styles.product_quantity}
              quantity={cartProduct?.quantity}
              handleQuantity={handleQuantity}
            />
          )}
        </div>
        <div onClick={() => addProductToFavorites()}>
          <Like liked={!!liked} />
        </div>
      </div>
    </div>
  );
};
