import React, { useContext } from "react";
import { FlowerTrends, TrendsCards } from "..";
import { Button } from "@nextui-org/react";
import { DataContext } from "../../context/DataContext";
import { CarouselProducts } from "../";
import Link from "next/link";


const TrendsSection = () => {
 
  const { trendsData } = useContext(DataContext);

  return (
    <>
      <div className="trendsSection-wrap">
        <div className="svg-wrap">
          <FlowerTrends />
        </div>
        <div className="header">
          <div className="title">Trends</div>
          <div className="button">
            <Link href={"/shop"}>
              <Button>SHOP ALL</Button>
            </Link>
          </div>
        </div>
        <div className="trends-cards-wrap">
          <TrendsCards data={trendsData} />
        </div>
        <div className="carousel">
          <CarouselProducts data={trendsData} />
        </div>
      </div>

      <style jsx>{`
        .carousel {
          display: none;
          width: 60vw;
        }
        .trendsSection-wrap {
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
        .trends-cards-wrap {
          display: block;
        }
        @media screen and (min-width: 450px) {
          .svg-wrap {
            height: 610px;
            left: 0;
          }
          .trends-cards-wrap {
            display: block;
          }
        }
        @media screen and (min-width: 960px) {
          .trendsSection-wrap {
            flex-direction: row;
            margin-top: 100px;
            justify-content: space-between;
            overflow: hidden;
            padding-bottom: 100px;
          }
          .svg-wrap {
            top: 0;
            height: 100%;
            left: 0;
          }
          .header {
            margin-bottom: 0;
            margin-left: 80px;
          }
          .carousel {
            display: block;
          }
          .trends-cards-wrap {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default TrendsSection;
