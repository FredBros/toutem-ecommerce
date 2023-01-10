import React from 'react'
import { BlogPostCard, ProductCard } from "../";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import { Products } from "../../@types/data";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type Props = {
  data: Products;
};
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 960 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 959, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarouselProducts = ({ data }: Props) => {
  console.log(data)
  return (
    <>
      <div className="carousel">
        <Carousel responsive={responsive} showDots={true}>
          {data.map((product) => {
            return (
              <div className="product-card">
                <Link href="">
                  <ProductCard product={product} />
                </Link>
              </div>
            );
          })}
        </Carousel>
      </div>
      <style jsx>{`
        .carousel {
          max-width: 100vh;
          margin: auto;
        }
        .product-card {
          padding: 10px 10px;
          height: 90%;
        }
      `}</style>
    </>
  );
};

export default CarouselProducts