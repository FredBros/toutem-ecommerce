import React, {useContext} from 'react'
import { Modal, Button, Text} from "@nextui-org/react";
import { ShopContext } from "../../context/ShopContext";
import { CartProductCard, StripeButton } from "../";
import {v4 as uuidv4} from "uuid"


const Cart = () => {
const { setShowCart, showCart, totalQuantities, cartItems, totalPrice } =
  useContext(ShopContext);
    const closeHandler = () => {
      setShowCart(false);
    };

console.log(cartItems);
  return (
    <Modal
      closeButton
      css={{ color: "primary", paddingBottom: "var(--nextui-space-lg)" }}
      aria-labelledby="modal-title"
      open={showCart}
      onClose={closeHandler}
    >
      <Modal.Header
        css={{
          borderBottom:
            totalQuantities > 0
              ? "solid 1px var(--nextui-colors-border)"
              : "none",
        }}
      >
        <Text id="modal-title" size={18}>
          {totalQuantities === 0 ? (
            "Your cart is empty"
          ) : (
            <>
              Your cart{" "}
              <Text b size={18} color={"var(--nextui-colors-primary)"}>
                ({totalQuantities} item{totalQuantities > 1 ? "s" : ""})
              </Text>
            </>
          )}
        </Text>
      </Modal.Header>
      {totalQuantities > 0 && (
        <Modal.Body css={{ paddingTop: "0" }}>
          <div className="cardsProduct-wrap">
            {cartItems.map((cartItem) => (
              <div key={uuidv4()}>
                <CartProductCard cartItem={cartItem} />
              </div>
            ))}
          </div>
          <div className="footer-modal">
            <div className="total">Total : {totalPrice}€</div>
            <div className="payBtn">
              <StripeButton cartItemsProps={cartItems} />
            </div>
          </div>
        </Modal.Body>
      )}

      <style jsx>{`
        .cardsProduct-wrap {
          padding-bottom: 20px;
        }
        .payBtn {
          padding-top: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </Modal>
  );
};

export default Cart