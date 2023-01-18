import { Button, Card } from '@nextui-org/react'
import Link from 'next/link';
import React, {useContext, useEffect, useState} from 'react'
import { toast } from 'react-hot-toast';
import { Products } from '../../@types/data';
import { ShopContext } from "../../context/ShopContext";
import { client } from '../../lib/client';


async function updateStocks(cartItems: Products) { await Promise.all(cartItems.map(async (cartItem) => {
  await client
    .patch(cartItem._id)
    .dec({ stock: cartItem.qtyInCart! })
    .inc({ soldCount: cartItem.qtyInCart! })
    .commit();
}))}



const SuccessPage = () => {
  const {  emptyCartItems, setShowCart } = useContext(ShopContext);
  const [isLoaded, setIsLoaded] = useState(false)
  

   useEffect(() => {
    const cartItems = localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems") || "")
      : null;
      console.log(cartItems);
    // setShowCart(() => false);
    localStorage.clear();
    updateStocks(cartItems)
    // emptyCartItems();
    setIsLoaded(true);
   },[])

   if(!isLoaded) return null


  // toast.success(
  //   <div
  //     style={{
  //       display: "flex",
  //       alignItems: "center",
  //       justifyContent: "center",
  //       flexDirection: "column",
  //     }}
  //   >
  //     <h4>
  //       thank you for your purchase.
  //     </h4>
  //   </div>
  // );

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