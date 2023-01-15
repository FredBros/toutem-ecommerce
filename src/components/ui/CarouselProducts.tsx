import React from 'react'
import { BlogPostCard, ProductCard } from "../";
import { v4 as uuidv4 } from "uuid";
import { Products } from "../../@types/data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type Props = {
  data: Products;
  isFullScreen? : boolean
};
const responsiveSection = {
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
    breakpoint: { max: 959, min: 450 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 450, min: 0 },
    items: 2,
  },
};
const responsiveFull = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktopLarge: {
    breakpoint: { max: 2000, min: 1400 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1399, min: 960 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 959, min: 551 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 550, min: 0 },
    items: 1,
  },
};



const CarouselProducts = ({ data, isFullScreen }: Props) => {

  const responsive = isFullScreen ? responsiveFull : responsiveSection;
  return (
    <>
      <div className="carousel">
        <Carousel
          centerMode={true}
          responsive={responsive}
          showDots={true}
          infinite={true}
          // autoPlay
        >
          {data.map((product) => {
            return (
              <div className="product-card" key={uuidv4()}>
                <ProductCard product={product} isInCarousel = {true}/>
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
          height: 100%;
          max-width: 200px;
        }
      `}</style>
    </>
  );
};

export default CarouselProducts