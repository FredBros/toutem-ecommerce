import React from 'react'
import { Badge } from "@nextui-org/react";
import { HiOutlineShoppingBag } from "react-icons/hi";

const CartIcon = () => {
  return (
    <>
      <Badge color="error" content={0}>
        <HiOutlineShoppingBag size={30} />
      </Badge>
    </>
  );
}

export default CartIcon