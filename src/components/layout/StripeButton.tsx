import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import getStripe from "../../lib/getStripe";
import { Button, Modal } from "@nextui-org/react";
import toast from "react-hot-toast";
import { Products } from "../../@types/data";
import { client } from "../../lib/client";
import {AlertStockModal} from "../"

type Stock = {
  slug: {
    current: string
  };
  stock: number;
};
type Stocks = Stock[];

type Props = {
  cartItems: Products;
};

const StripeButton = ({ cartItems }: Props) => {


  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false)
  const handlerModal = () => setIsAlertModalOpen(true);
  const closeHandlerModal = () => setIsAlertModalOpen(false);



  const { totalPrice, totalQuantities } = useContext(ShopContext);

  const checkStock = async () => {
    const cartItemsSlugs = cartItems.map(
      (cartItem) => `"${cartItem.slug.current}"`
    );
    const query = `*[_type == "product" && slug.current in [${cartItemsSlugs}]]{slug, stock}`;
    const stocks: Stocks = await client.fetch(query);
    const alertStock = cartItems.map((cartItem) => {
      const stockItem = stocks.find(
        (stock) => stock.slug.current === cartItem.slug.current
        );
      if (!stockItem) return{};
      return {
        slug: cartItem.slug.current,
        stock: stockItem.stock,
        qtyInCart: cartItem.qtyInCart!,
        alertStock: cartItem.qtyInCart! < stockItem.stock,
      };
    });
    return alertStock;
  };

  const stockProblem = () => {
    handlerModal();
  }

  const handleCheckout = async () => {

    //save cart in local storage in order to recover it after a canceled operation during strip checkout
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
    localStorage.setItem("totalQuantities", JSON.stringify(totalQuantities));

    //check stocks
    const alert = await checkStock();
    // if stock problem : alert
   if (alert.find((item) => item.alertStock)) {
    stockProblem()
  }

   // else stripe checkout
   else {
     const stripe = await getStripe();
     const response = await fetch("/api/stripe", {
       method: "Post",
       headers: {
         "Content-type": "application/json",
       },
       body: JSON.stringify(cartItems),
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
      <AlertStockModal isOpen={isAlertModalOpen} close={closeHandlerModal} />
    </>
  );
};

export default StripeButton;
