import React from 'react'
import { urlFor } from "../../lib/client";
import {Product} from "../../@types/data"
import { Card} from "@nextui-org/react";
import Link from 'next/link';
import {BuyNowButtonCard} from "../"


type Props = {
    product: Product
    isInCarousel?: boolean
}

const slicedText= (text: string | undefined) =>{
  if(!text) return null
  if (text.length<100) return text
  return text.slice(0, 100) + '...'
}

const ProductCard = ({ product, isInCarousel }: Props) => {
  return (
    <div className="card-wrap">
      <Link href={`/shop/product/${product.slug.current}`}>
        <Card
          isPressable
          isHoverable
          variant="bordered"
          css={{
            aspectRatio: 1 / 1,
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
              objectFit="contain"
              alt="Product image"
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
              height: "30%",
              padding: "0",
              alignItems: "flex-start",
              overflow: "hidden",
            }}
          >
            <div className="footer-descr">
              <div className="footer-header">
                <div className="title">{product.name}</div>
                <div className="price">{product.price}€</div>
              </div>
              <div className="text">{slicedText(product.summary)}</div>
            </div>
          </Card.Footer>
        </Card>
      </Link>
      <BuyNowButtonCard product={product} />
      <style jsx>{`
        .card-wrap {
          
          height: 100%;
        }
        .footer-descr {
          padding: 5px 10px 0 10px;
        }
        .footer-header {
          display: flex;
          justify-content: space-between;
          gap: 5px;
        }
        .title {
          font-size: ${isInCarousel ? "0.7rem" : "1.3rem"};
          font-weight: 700;
          color: #1f2937;
          line-height: ${isInCarousel ? "1" : "1.1"};
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
        @media screen and (min-width: 960px) {
          .title {
            line-height: normal;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductCard