import React,{useState, useContext} from 'react'
import { Product, Products } from "../../../src/@types/data";
import { Card, Button } from "@nextui-org/react";
import {CounterButtons, ImageProduct, CarouselProducts} from "../"


type Props = {
  product: Product;
  maylikeProducts: Products;
};



const ProductPage = ({ product, maylikeProducts }: Props) => {

  const [qty, setQty] = useState(0);

  const incQty = () => {
    if (qty >= product.stock) {
      setQty(() => product.stock);
    } else setQty((prev) => prev + 1);
  };

  const decQty = () => {
    if (qty === 0) setQty(() => 0);
    else setQty((prev) => prev - 1);
  };

  return (
    <>
      <div className="product-page-wrap">
        <div className="product-wrap">
          <div className="image-price-wrap">
            <div className="image-wrap">
              <ImageProduct image={product.image} />
            </div>
            <div className="add-shop-wrap">
              <div className="price">{product.price}€</div>
              <p>Quantity</p>
              <CounterButtons
                qty={qty}
                decQty={decQty}
                incQty={incQty}
                stock={product.stock}
              />
              <div className="btn-buy-wrap">
                <Button
                  bordered
                  css={{ maxWidth: "12rem", width: "40%", minWidth: "auto" }}
                >
                  Add to cart
                </Button>
                <Button
                  shadow
                  css={{ maxWidth: "12rem", width: "40%", minWidth: "auto" }}
                >
                  Buy now
                </Button>
              </div>
            </div>
          </div>
          <div className="product-content-wrap">
            <h1 className="product-name">{product.name}</h1>
            <div className="product-summary">{product.summary}</div>
            <div className="product-details">{product.details}</div>
          </div>
        </div>

        <div className="carousel-wrap">
          <h3>You may like also : </h3>
          <CarouselProducts data={maylikeProducts} isFullScreen={true} />
        </div>
      </div>
      <style jsx>{`
        .product-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          max-width: 100%;
          margin: 50px auto;
        }
        .image-price-wrap {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        .image-wrap {
          position: relative;
          width: 300px;
          height: 300px;
          max-width: 95%;
        }
        .price {
          background: var(--nextui-colors-primary);
          padding: 5px 10px;
          border-radius: 100px;
          margin: 10px;
        }
        .add-shop-wrap {
          gap: 15px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        .btn-buy-wrap {
          width: 100%;
          max-width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }
        .product-content-wrap {
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          max-width: 500px;
        }
        .product-name {
          font-family: "Quicksand", sans-serif;
          color: var(--nextui-colors-primary);
          font-size: 2rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 20px;
        }
        .product-summary {
          margin-bottom: 20px;
        }
        .product-details {
          font-size: 0.8rem;
        }
        .carousel-wrap {
          width: 80vw;
          margin: 50px auto 50px;
        }
        h3 {
          font-family: "Quicksand", sans-serif;
          color: var(--nextui-colors-primary);
          font-weight: 700;
        }

        @media screen and (min-width: 960px) {
          .image-price-wrap {
            flex-direction: row;
          }
          .price {
            align-self: flex-start;
          }
          .add-shop-wrap {
            max-width: 500px;
          }
          .product-name {
            font-size: 3rem;
          }
          .product-summary {
            font-size: 1.5rem;
          }
          .product-details {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default ProductPage