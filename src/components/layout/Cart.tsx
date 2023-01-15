import React, {useContext} from 'react'
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import { ShopContext } from "../../context/ShopContext";
import {CartProductCard} from "../"
import {v4 as uuidv4} from "uuid"


const Cart = () => {
const { setShowCart, showCart, totalQuantities, cartItems } = useContext(ShopContext);
    const closeHandler = () => {
      setShowCart(false);
    };

  return (
    <Modal
      closeButton
      css={{ color: "primary" }}
      aria-labelledby="modal-title"
      open={showCart}
      onClose={closeHandler}
    >
      <Modal.Header>
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
      <Modal.Body>
        {cartItems.map((cartItem) => (
          <div key={uuidv4()}>
            <CartProductCard cartItem={cartItem} />
          </div>
        ))}
      </Modal.Body>
    </Modal>
  );
};

export default Cart