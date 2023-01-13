import React from 'react'
import { Products } from "../../../src/@types/data";
import {ProductCard, CartShop} from "../"
import Link from 'next/link';
import { Button } from "@nextui-org/react";
import {MdOutlineAddShoppingCart} from "react-icons/md"
import {v4 as uuidv4} from "uuid"


type Props = {
  products: Products;
};

const addToCart = () =>{
}

const ProductsSection = ({ products }: Props) => {
  return (
    <div className="products-wrap">
      {products.map((product) => (
        <div className="product-card-wrap" key={uuidv4()} >
          
            <ProductCard product={product} />
          
          <div className="cartshop-wrap">
            <Button
              auto
              icon={
                <MdOutlineAddShoppingCart color="currentColor"  size="2em"/>
              }
              onPress={addToCart}
            ></Button>
          </div>
        </div>
      ))}
      <style jsx>{`
        .products-wrap {
          margin-top: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px;
        }
        .product-card-wrap {
          position: relative;
          height: 300px;
          max-width: 300px;
        }
        .cartshop-wrap {
          position: absolute;
          top: 10px;
          right: 10px;
        }
      `}</style>
    </div>
  );

};

export default ProductsSection;