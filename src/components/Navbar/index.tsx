import Cart from "@/assets/icons/cart.svg";
import Heart from "@/assets/icons/favorite.svg";
import Home from "@/assets/icons/home.svg";
import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.scss";
import { useAppSelector } from "@/redux/store";

export const Navbar = () => {
  const cartProductsCount = useAppSelector(
    (state) => state.cart.products
  ).length;

  const likedProductsCount = useAppSelector(
    (state) => state.favorites.products
  ).length;

  return (
    <div className={styles.navbar}>
      <Link href="/" className={styles.navbar_home}>
        <Home />
      </Link>
      <Link href="/cart" className={styles.navbar_cart}>
        {cartProductsCount > 0 && (
          <span className={styles.navbar_counter}>{cartProductsCount}</span>
        )}
        <Cart />
      </Link>
      <Link href="/favorites" className={styles.navbar_heart}>
        {likedProductsCount > 0 && (
          <span className={styles.navbar_counter}>{likedProductsCount}</span>
        )}
        <Heart />
      </Link>
    </div>
  );
};
