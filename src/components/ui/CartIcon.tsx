import React, {useContext} from 'react'
import { Badge } from "@nextui-org/react";
import { HiOutlineShoppingBag } from "react-icons/hi";

type Props = {
  totalQuantities: number;
  setShowCart: (data:boolean) => null,
};

const CartIcon = ({ totalQuantities, setShowCart }: Props) => {
  return (
    <>
      <button onClick={() => setShowCart(true)}>
        <Badge color="error" content={totalQuantities}>
          <HiOutlineShoppingBag size={30} />
        </Badge>
      </button>
      <style jsx>{`
        button {
          background: none;
          color: inherit;
          border: none;
          padding: 0;
          font: inherit;
          cursor: pointer;
          outline: inherit;
        }
      `}</style>
    </>
  );
};

export default CartIcon