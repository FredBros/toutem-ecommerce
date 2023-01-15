import React from 'react'
import { Product, Products } from '../@types/data';

type Props = {
  cartItems: Products
  product: Product
};

export const getQtyInCart = (cartItems: Products, product: Product) => {
  const checkProductInCart = cartItems.find((item) => item._id === product._id);
  return checkProductInCart ? checkProductInCart.qtyInCart : 0;
};
