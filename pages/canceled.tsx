import React, {useEffect, useContext} from 'react'
import { Button, Text } from "@nextui-org/react";
import Link from 'next/link';
import { ShopContext } from '../src/context/ShopContext';



const Canceled = () => {

    const { setCartItems, setTotalPrice, setTotalQuantities }= useContext(ShopContext)

    useEffect(() => {
      const cartItems =  localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")||"") : null
      cartItems && setCartItems(() => cartItems);
      const totalPrice =  localStorage.getItem("totalPrice") ? JSON.parse(localStorage.getItem("totalPrice")||"") : null
       totalPrice && setTotalPrice(() => totalPrice);
      const totalQuantities =  localStorage.getItem("totalQuantities") ? JSON.parse(localStorage.getItem("totalQuantities")||"") : null
       totalQuantities && setTotalQuantities(() => totalQuantities);
    }, [])
    

  return (
    <div className="wrap">
      <Button>
        <Link href={"/"}>
          Back to Shop
        </Link>
      </Button>
      <style jsx>{`
        .wrap {
          height: 40vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}

export default Canceled