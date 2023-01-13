import React, { useContext } from "react";
import { Products } from "../../@types/data";
import { DataContext } from "../../context/DataContext";
import { ProductCard } from "../";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

const BestSellersCards = () => {
  const { bestSellersData } = useContext(DataContext);
  return (
    <div className="bestSellers-cards-wrap">
      {bestSellersData.map((product) => {
        return (
          <div className="card-wrap" key={uuidv4()}>
              <ProductCard product={product} />
          </div>
        );
      })}
      <style jsx>{`
        .bestSellers-cards-wrap {
          display: flex;
          flex-direction: column;
          gap: 50px;
          align-items: center;
        }
        .card-wrap {
          aspect-ratio: 1 / 1;
          width: 80%;
          max-width: 375px;
          max-height: 386px;
        }
        @media screen and (min-width: 450px) {
          .bestSellers-cards-wrap {
            gap: 80px;
          }
        }
        @media screen and (min-width: 960px) {
          .bestSellers-cards-wrap {
            flex-direction: row;
            gap: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default BestSellersCards;
