import React from "react";
import { Button } from "@nextui-org/react";
import { Product } from "../../../src/@types/data";
import { HiPlus, HiMinus } from "react-icons/hi";


type Props = {
  qty:number,
  decQty:() => void,
  incQty:() => void,
  stock: number,
}

const CounterButtons = ({qty, decQty, incQty, stock}:Props) => {
  return (
    <div className="counter">
      <Button
        disabled={qty === 0}
        onPress={decQty}
        css={{
          h: "100%",
          p: "0 20px",
          minWidth: "auto",
          borderRadius: "var(--nextui-radii-xl) 0 0 var(--nextui-radii-xl)",
        }}
      >
        <HiMinus size={"1.5rem"} />
      </Button>
      <div className="counter-number">{qty}</div>
      <Button
        disabled={qty >= stock}
        onPress={incQty}
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
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .counter-number {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          background: var(--nextui-colors-background2);
          padding: 0 30px;
          border: solid 2px var(--nextui-colors-primary);
        }
      `}</style>
    </div>
  );
};

export default CounterButtons;
