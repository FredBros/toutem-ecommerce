import React from 'react'
import {BlobCategoryDetail} from "../"
import { urlFor } from "../../lib/client";
import { Button } from "@nextui-org/react";

type Props = {
  data: {
    category: string;
    image: {}
    subTitle: string
    text: string
  };
  activeCategory: string;
  setActiveCategory: (value: string) => void;
};

const CategoryDetails = ({ data, activeCategory, setActiveCategory }:Props) => {
     let isActive = activeCategory == data.category ? true : false;
     let maxHeight = isActive ? "100vh" : 0
  return (
    <>
      <div className="category-detail-wrap">
        <div className="images-wrap">
          <div className="blob-wrap">
            <BlobCategoryDetail />
          </div>
          <img
            // @ts-ignore
            src={urlFor(data.image)}
            alt=""
          />
        </div>
        <div className="text-wrap">
          <div className="subtitle">{data.subTitle}</div>
          <div className="text">{data.text}</div>
          <div className="button">
            <Button>EXPLORE THE COLLECTION</Button>
          </div>
        </div>

        <style jsx>{`
          .category-detail-wrap {
            overflow: hidden;
            width: 100%;
            position: relative;
            margin-top: 15px;
            max-height: ${maxHeight};
            transition: all 1s  linear;
          }
          .images-wrap {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .blob-wrap {
            position: absolute;
            width: 155x;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          img {
            z-index: 1;
            height: 155px;
          }
          .text-wrap {
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }
          .subtitle {
            color: var(--nextui-colors-primary);
            font-family: "Quicksand", sans-serif;
            font-weight: 600;
            font-size: 1.25rem;
          }
          .text {
            font-weight: 600;
            font-size: 0.75rem;
          }
        `}</style>
      </div>
    </>
  );
};

export default CategoryDetails