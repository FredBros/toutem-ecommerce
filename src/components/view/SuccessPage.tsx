import { Card } from '@nextui-org/react'
import React, {useContext, useEffect} from 'react'
import { Products } from '../../@types/data';
import { ShopContext } from "../../context/ShopContext";
import { client } from '../../lib/client';




// update sanity
// vider le panier


async function updateStocks(cartItems: Products) { await Promise.all(cartItems.map(async (cartItem) => {
  await client.patch(cartItem._id).dec({stock: cartItem.qtyInCart!}).commit()
}))}



const SuccessPage = () => {
  const {  emptyCartItems, setShowCart } = useContext(ShopContext);

   useEffect(() => {
    const cartItems = localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems") || "")
      : null;
    
    setShowCart(() => false);
    localStorage.clear();
    updateStocks(cartItems)
    emptyCartItems();
   },[])


  return <div>SuccessPage</div>;
}

export default SuccessPage