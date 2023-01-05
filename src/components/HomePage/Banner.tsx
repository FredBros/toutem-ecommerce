import React, {useContext, useEffect, useState} from "react";
import {EllipseBanner} from "../";
import { urlFor } from "../../lib/client";
import { DataContext } from "../../context/DataContext";



const Banner = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    setIsLoaded(true)
  }, [])
  const {banner} =  useContext(DataContext)

  if (!isLoaded) return null

  return (
    <div className="banner-wrap">
      <div className="banner-image">
        <div className="ellipse">
          <EllipseBanner />
        </div>
        <img
          // @ts-ignore
          src={urlFor(banner.image)}
          alt=""
        />
      </div>
      <div className="banner-text">
        <p className="title">{banner.title}</p>
        <p className="text">{banner.text}</p>
      </div>
      <style jsx>{`        
        .ellipse {
          width: 80%;
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .banner-image {
          height: 400px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        img {
          z-index: 1;
          width: 50%;
        }
        .banner-text {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        p {
          font-weight: 600;
          text-align: center;
        }
        .title {
          color: var(--nextui-colors-primary);
          font-size: var(--nextui-fontSizes-5xl);
          font-family: Quicksand;
          line-height: 89.84%;
        }
        .text {
          font-size: var(--nextui-fontSizes-xs);
          padding: 20px 40px;
        }
        @media screen and (min-width: 650px) {
          .banner-wrap {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: row-reverse;
          }
          .banner-image {
            position: relative;
          }
          .ellipse {
            height: 500px;
            width: 500px;
            bottom: 3vh;
            left: 3vw;
          }
          img {
            width: 80%;
          }
          .banner-text {
            min-width: 66%;
          }
          .title {
            font-size: var(--nextui-fontSizes-8xl);
          }
        }
        @media screen and (min-width: 1400px) {
          .banner-wrap {
            gap: 5vw;
          }
          .banner-image {
            justify-content: flex-start;
          }
         
          .ellipse {
            height: 1900px;
            width: 1900px;
            bottom: -90%;
            left: 7%;
          }
          .banner-text {
            width: 60%;
            min-width: 40%;
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;
