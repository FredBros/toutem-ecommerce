import React from 'react'
import {Product, } from "../../@types/data"
import { ImageProduct, CounterButtons, RemoveBtn } from "../";

type Props = {
  cartItem: Product;
};

const CartProductCard = ({ cartItem }: Props) => {
  return (
    <>
      <div className="product-card">
        <div className="image-wrap">
          <ImageProduct image={cartItem.image} />
        </div>
        <div className="product-right">
          <div className="name-price-wrap">
            <p className="name">{cartItem.name}</p>
            <div className="price">{cartItem.price}€</div>
          </div>
          <div className="buttons">
            <div className="counter-btn">
              <CounterButtons
                stock={cartItem.stock}
                isInCartShop={true}
                cartItemId={cartItem._id}
                cartItemQty={cartItem.qtyInCart}
              />
            </div>
            <div className="remove-btn">
              <RemoveBtn itemId={cartItem._id} />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .product-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 15px 0 10px 0;
          border-bottom: solid 1px var(--nextui-colors-border);
        }
        .image-wrap {
          height: 100px;
          width: 100px;
        }
        .product-right {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-direction: column;
          flex-grow: 4;
          height: 100px;
        }
        .name {
        }
        .price {
          display: inline-block;
          padding: 5px;
          background-color: var(--nextui-colors-primary);
          font-size: 0.8rem;
          line-height: 0.6rem;
          font-weight: 700;
          border-radius: 50px;
          height: 20px;
        }
        .name-price-wrap,
        .buttons {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        .buttons {
          width: 100%;
        }
        .counter-btn {
          width: 150px;
          height: 35px;
        }
      `}</style>
    </>
  );
};

export default CartProductCard