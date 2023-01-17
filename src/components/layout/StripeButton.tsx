import React, { useContext, useState, useEffect, useRef } from "react";
import { ShopContext } from "../../context/ShopContext";
import getStripe from "../../lib/getStripe";
import { Button } from "@nextui-org/react";
import toast from "react-hot-toast";
import { Products, CheckStockResult } from "../../@types/data";
import { client } from "../../lib/client";
import {AlertStockModal} from "../"

type Stock = {
  slug: {
    current: string
  };
  stock: number
  name: string
};
type Stocks = Stock[];

type Props = {
  cartItemsProps: Products;
};



const StripeButton = ({ cartItemsProps }: Props) => {

  let alertStock: CheckStockResult;
const [checkStockResult, setCheckStockResult] = useState<CheckStockResult>([]);

  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false)
  const { totalPrice, totalQuantities, cartItems, updateCartAfterStockIssues } =
    useContext(ShopContext);
  
  
  
  
  
  const handlerModal = () => setIsAlertModalOpen(true);
  const closeHandlerModal = () => setIsAlertModalOpen(false);

  
  
  const checkStock = async () => {
    const cartItemsPropsSlugs = cartItemsProps.map(
      (cartItem) => `"${cartItem.slug.current}"`
    );
    const query = `*[_type == "product" && slug.current in [${cartItemsPropsSlugs}]]{slug, stock, name}`;
    const stocks: Stocks = await client.fetch(query);
     alertStock = cartItemsProps.map((cartItem) => {
      const stockItem = stocks.find(
        (stock) => stock.slug.current === cartItem.slug.current
      );
      if (!stockItem) return {};
      return {
        slug: cartItem.slug.current!,
        stock: stockItem.stock!,
        qtyInCart: cartItem.qtyInCart!,
        name: stockItem.name!,
        
        alertStock: cartItem.qtyInCart! > stockItem.stock,
      };
    });
    setCheckStockResult(()=> alertStock);
    return alertStock;
  };


  // if there is a stock issue...
  const stockProblem = () => {
    // open modal
    handlerModal();
    // modify cart
    modifyCart();
  };

  const modifyCart = () => {
    const newCart = cartItemsProps.map((cartItem) => {
      const alertStockItemFound = alertStock.find(alertStockItem => alertStockItem.slug === cartItem.slug.current)!
      if(alertStockItemFound.alertStock) return { ...cartItem, qtyInCart: alertStockItemFound.stock };
       else return cartItem
    })
    updateCartAfterStockIssues(newCart);
  }

//
// PAY WITH STRIPE button clicked
//
  const handleCheckout = async () => {
    //check stocks
    const alertStock = await checkStock();
    // if stock problem : alert
   if (alertStock.find((item) => item.alertStock)) {
     stockProblem();
   }
   // else stripe checkout
   else {
     //save cart in local storage in order to recover it after a canceled operation during strip checkout
     localStorage.setItem("cartItemsProps", JSON.stringify(cartItemsProps));
     localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
     localStorage.setItem("totalQuantities", JSON.stringify(totalQuantities));

     const stripe = await getStripe();
     const response = await fetch("/api/stripe", {
       method: "Post",
       headers: {
         "Content-type": "application/json",
       },
       body: JSON.stringify(cartItemsProps),
     });
     //@ts-ignore
     if (response.statusCode === 500) return;
     const data = await response.json();
     toast.loading("Redirecting...");
     stripe!.redirectToCheckout({ sessionId: data.id });
     
   }
  };

  return (
    <>
      <Button
        css={{ backgroundColor: "var(--nextui-colors-primary)" }}
        onPress={handleCheckout}
      >
        PAY WITH STRIPE
      </Button>
      <AlertStockModal isOpen={isAlertModalOpen} close={closeHandlerModal} 
      data={checkStockResult}
       />
    </>
  );
};

export default StripeButton;
