import React, { useContext } from "react";
import { LemonFlower, BestSellersCards } from "../";
import { Button } from "@nextui-org/react";
import { DataContext } from "../../context/DataContext";
import { CarouselProducts } from "../";
import Link from "next/link";

const BestSellersSection = () => {
  const { bestSellersData } = useContext(DataContext);
  return (
    <>
      <div className="bestSellersSection-wrap">
        <div className="svg-wrap">
          <LemonFlower />
        </div>
        <div className="header">
          <div className="title">Bestsellers</div>
          <div className="button">
            <Button>
              <Link href={"/shop"}>SHOP ALL</Link>
            </Button>
          </div>
        </div>
        <div className="bestsellers-cards-wrap">
          <BestSellersCards />
        </div>
        <div className="carousel">
          <CarouselProducts data={bestSellersData} />
        </div>
      </div>
      <style jsx>{`
        .bestSellersSection-wrap {
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: 30px 10px;
        }
        .header {
          height: 325px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 30px;
        }
        .svg-wrap {
          height: 325px;
          position: absolute;
          top: 50px;
        }
        .title {
          font-family: "Quicksand", sans-serif;
          font-weight: 600;
          font-size: 2.25rem;
          color: var(--nextui-colors-primary);
        }
        .bestsellers-cards-wrap {
          display: block;
        }
        .carousel {
          display: none;
          width: 60vw;
        }
        @media screen and (min-width: 450px) {
          .svg-wrap {
            height: 610px;
            left: -5%;
          }
          .bestsellers-cards-wrap {
            display: block;
          }
        }
        @media screen and (min-width: 960px) {
          .bestSellersSection-wrap {
            flex-direction: row;
            margin-top: 100px;
            justify-content: space-between;
          }
          .svg-wrap {
            top: -15%;
            height: 610px;
            left: -5%;
          }
          .header {
            margin-bottom: 0;
            margin-left: 80px;
          }
          .bestsellers-cards-wrap {
            display: none;
          }
          .carousel {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default BestSellersSection;
