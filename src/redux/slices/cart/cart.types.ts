import { ProductType } from "@/types/product";

export type CartProductTypes = {
  quantity: number;
};

export type CartProductType = ProductType & CartProductTypes;

export type initiailCartState = {
  products: CartProductType[];
  quantity: number;
  total: number;
};
