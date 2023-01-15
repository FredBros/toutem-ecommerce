import React, { useContext } from "react";
import { Button } from "@nextui-org/react";
import { Product } from "../../../src/@types/data";
import { HiPlus, HiMinus } from "react-icons/hi";
import { ShopContext } from "../../context/ShopContext";

type Props = {
  stock: number;
  isInCartShop?: boolean;
  cartItemId?: string;
  cartItemQty?: number;
};

const CounterButtons = ({
  stock,
  isInCartShop,
  cartItemId,
  cartItemQty = 0,
}: Props) => {
  const { qty, decQty, incQty, toggleCartItemQuantity } =
    useContext(ShopContext);
   
  return (
    <>
      <div className="counter">
        <Button
          disabled={isInCartShop ? cartItemQty===0 : qty === 0}
          onPress={
            isInCartShop
              ? () => toggleCartItemQuantity(cartItemId!, "dec")
              : () => decQty()
          }
          css={{
            h: "100%",
            p: "0 20px",
            minWidth: "auto",
            borderRadius: "var(--nextui-radii-xl) 0 0 var(--nextui-radii-xl)",
          }}
        >
          <HiMinus size={"1.5rem"} />
        </Button>
        <div className="counter-number">{isInCartShop ? cartItemQty : qty}</div>
        <Button
          disabled={
            isInCartShop ? cartItemQty >= stock : qty + cartItemQty >= stock
          }
          onPress={
            isInCartShop
              ? () => toggleCartItemQuantity(cartItemId!, "inc")
              : () => incQty()
          }
          css={{
            h: "100%",
            p: "0 20px",
            minWidth: "auto",
            borderRadius: "0 var(--nextui-radii-xl) var(--nextui-radii-xl) 0  ",
          }}
        >
          <HiPlus size={"1.5rem"} />
        </Button>
        <style jsx>{`
          .counter {
            box-sizing: border-box;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .counter-number {
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 100%;
            background: var(--nextui-colors-background2);
            border: solid 2px var(--nextui-colors-primary);
          }
        `}</style>
      </div>
    </>
  );
};

export default CounterButtons;
