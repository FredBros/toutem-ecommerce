import { Button,  } from '@nextui-org/react'
import Link from 'next/link';
import React, { useEffect, useState} from 'react'
import { Products } from '../../@types/data';
import { client } from '../../lib/client';


async function updateStocks(cartItems: Products) { await Promise.all(cartItems.map(async (cartItem) => {
  await client
    .patch(cartItem._id)
    .dec({ stock: cartItem.qtyInCart! })
    .inc({ soldCount: cartItem.qtyInCart! })
    .commit();
}))}



const SuccessPage = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  

   useEffect(() => {
    const cartItems = localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems") || "")
      : null;
      console.log(cartItems);
    localStorage.clear();
    updateStocks(cartItems)
    setIsLoaded(true);
   },[])

   if(!isLoaded) return null



  return (
    <div className="wrap">
      <h1>Thank you for your purchase.</h1>
      <Button>
        <Link href={"/"}>Back to Shop</Link>
      </Button>
      <style jsx>{`
        .wrap {
          height: 40vh;
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-direction: column;
        }
        h1{
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default SuccessPage