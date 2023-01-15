import React, {useContext} from 'react'
import { Button } from "@nextui-org/react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { ShopContext } from "../../context/ShopContext";
import { Product } from "../../../src/@types/data";


type Props = {
  product: Product;
};


const BuyNowButtonCard = ({product}: Props) => {
    const { onAdd, setShowCart, cartItems } = useContext(ShopContext);

    const handleBuyNow = () => {
      onAdd(product, 1);
      setShowCart(true);
    };
  return (
    <div className="cartshop-wrap">
      <Button
        disabled={product.stock < 1 }
        auto
        icon={<MdOutlineAddShoppingCart color="currentColor" size="2em" />}
        onPress={handleBuyNow}
      ></Button>

      <style jsx>{`
        .cartshop-wrap {
          position: absolute;
          top: 10px;
          right: 10px;
          transition: transform 0.3s;
        }
        .cartshop-wrap:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}

export default BuyNowButtonCard