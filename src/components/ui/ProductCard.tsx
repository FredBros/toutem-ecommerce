import React from 'react'
import { urlFor } from "../../lib/client";
import {Product} from "../../@types/data"
import { Card, Text, Button } from "@nextui-org/react";
import { CartShop} from "../"

type Props = {
    product: Product
}

const slicedText= (text: any) =>{
  if (text.length<100) return text
  return text.slice(0, 100) + '...'
}

const ProductCard = ({product}:Props) => {
  return (
    <Card
      isPressable
      isHoverable
      variant="bordered"
      css={{
        h: "100%",
        w: "100%",
        p: "20px",
        borderRadius: "0 var(--nextui-radii-xl)",
      }}
    >
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          // @ts-ignore
          src={urlFor(product.image)}
          width="100%"
          height="100%"
          objectFit="cover"
          alt="Card example background"
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#ffffff66",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
          left: 0,
          zIndex: 1,
          borderRadius: "0 0 0 var(--nextui-radii-xl)",
        }}
      >
        <div className="card-footer">
          <div className="footer-descr">
            <div className="footer-header">
              <div className="title">{product.name}</div>
              <div className="price">{product.price}€</div>
            </div>
            <div className="text">{slicedText(product.summary)}</div>
          </div>
        </div>
      </Card.Footer>

      <style jsx>{`
        .card-footer {
        }
        .footer-descr {
        }
        .footer-header {
          display: flex;
          justify-content: space-between;
          gap: 5px;
        }
        .title {
          font-size: 0.8rem;
          font-weight: 700;
          color: #1f2937;
        }
        .price {
          display: inline-block;
          padding: 5px;
          background-color: var(--nextui-colors-primary);
          font-size: 0.6rem;
          line-height: 0.6rem;
          font-weight: 700;
          border-radius: 50px;
          height: 20px;
        }
        .text {
          margin-top: 5px;
          font-size: 0.7rem;
          line-height: 0.7rem;
          color: #6b7280;
        }
      `}</style>
    </Card>
  );
}

export default ProductCard