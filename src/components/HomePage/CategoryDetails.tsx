import React from "react";
import { BlobCategoryDetail } from "../";
import { urlFor } from "../../lib/client";
import { Button } from "@nextui-org/react";

type Props = {
  data: {
    category: string;
    image: {};
    subTitle: string;
    text: string;
  };
  activeCategory: string;
  isActive: boolean;
};

const CategoryDetails = ({ data, isActive }: Props) => {
  //  let isActive = activeCategory == data.category ? true : false;
  // let maxHeight = isActive ? "100vh" : 0;
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
            display: flex;
            flex-direction: column;
            padding-top: ${isActive ? "15px" : 0};
            overflow: hidden;
            width: 100%;
            max-height: ${isActive ? "100vh" : 0};
            transition: max-height 5s linear;
          }
          .images-wrap {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .blob-wrap {
            width: 155px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          img {
            position: absolute;
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
          @media screen and (min-width: 450px) {
            .category-detail-wrap {
              flex-direction: row;
              justify-content: space-between;
              width: 100%;
              gap: 5px;
            }
            .text-wrap {
              align-items: flex-end;
              text-align: end;
              padding: 0 20px;
            }
            .subtitle {
              font-size: clamp(1.25rem, 0.1471rem + 3.9216vw, 2.5rem);
            }
            .blob-wrap {
              position: relative;
              width: 40vw;
              left: -20%;
            }
            img {
              height: auto;
              
            }
          }
          @media screen and (min-width: 961px) {
            .subtitle {
              font-size: 3.12rem;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default CategoryDetails;
