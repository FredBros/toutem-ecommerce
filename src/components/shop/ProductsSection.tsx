import React from 'react'
import { Products } from "../../../src/@types/data";
import {ProductCard} from "../"
import {v4 as uuidv4} from "uuid"


type Props = {
  products: Products;
};



const ProductsSection = ({ products }: Props) => {
  return (
    <div className="products-wrap">
      {products.map((product) => (
        <div className="product-card-wrap" key={uuidv4()} >
            <ProductCard product={product} />
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
      `}</style>
    </div>
  );

};

export default ProductsSection;