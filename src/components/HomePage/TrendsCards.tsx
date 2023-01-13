import React, { useContext } from "react";
import { Products } from "../../@types/data";
import { DataContext } from "../../context/DataContext";
import { ProductCard, CarouselProducts } from "../";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";


type Props= {
  data: Products
}

const TrendsCards = ({data}:Props) => {
     const { trendsData } = useContext(DataContext);
  return (
    <>
      <div className="trends-cards-wrap-sm">
        {data.map((product) => {
          return (
            <div className="card-wrap" key={uuidv4()}>
                <ProductCard product={product} />
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .trends-cards-wrap-sm {
          display: flex;
          flex-direction: column;
          gap: 50px;
          align-items: center;
          flex-wrap: wrap;
        }
        .card-wrap {
          width: 80%;
          aspect-ratio: 1 / 1;
          max-width: 375px;
          max-height: 386px;
        }
       
        @media screen and (min-width: 450px) {
          .trends-cards-wrap-sm {
            display: flex;
            gap: 80px;
          }
        }
        @media screen and (min-width: 960px) {
          .trends-cards-wrap-sm {
            display: none;
            flex-direction: row;
            gap: 15px;
          }
         
          .card-wrap {
            width: 300px;
            height: 300px;
          }
        }
      `}</style>
    </>
  );
}

export default TrendsCards