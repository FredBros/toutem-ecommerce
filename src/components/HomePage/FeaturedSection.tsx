import React, {useContext} from 'react'
import { FeaturedData } from "../../@types/data";
import { DataContext } from "../../context/DataContext";
import { urlFor } from '../../lib/client';
import { Button } from '@nextui-org/react';
import Link from 'next/link';


const FeaturedSection = () => {
  const { featuredData } = useContext(DataContext);
  return (
    <div className="featured-section">
      {/* @ts-ignore */}
      <img src={urlFor(featuredData.image)} />
      <div className="content">
        <div className="text">{featuredData.text}</div>
        
          <Button
            className="button"
            css={{
              background: "var(--nextui-colors-background)",
              fontSize: "1rem",
              fontWeight: "700",
              color: "var(--nextui-colors-foreground)",
            }}
          ><Link href={`/${featuredData.buttonLink}`}>
            {featuredData.buttonText}
        </Link>
          </Button>
      </div>

      <style jsx>{`
        .featured-section {
          color: #fff;
          font-family: "Quicksand", sens-serif;
          width: 100%;
          height: 450px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 30px;
        }
        .content {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 30px;
        }
        img {
          height: 100%;
          object-fit: cover;
          position: absolute;
        }
        .text {
          z-index: 1;
          font-weight: 600;
          font-size: 2rem;
          text-align: center;
        }
        @media screen and (min-width: 450px) {
          .featured-section {
            flex-direction: row-reverse;
            gap: 0;
          }
          img {
            position: relative;
            width: 30%;
          }
          .content {
            height: 100%;
            background-color: var(--nextui-colors-primary);
            padding: 10px;
          }
        }
        @media screen and (min-width: 450px) {
          img {
            width: 40%;
          }
          .text {
            width: 80%;
          }
        }
      `}</style>
    </div>
  );
}

export default FeaturedSection