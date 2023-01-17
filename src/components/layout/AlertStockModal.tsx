import { Modal } from '@nextui-org/react'
import React from 'react'
import { CheckStockResult } from "../../@types/data";
import {v4 as uuidv4} from "uuid"

type Props = {
  isOpen: boolean;
  close: () => void;
  data: CheckStockResult;
};

const AlertStockModal = ({ isOpen, close, data }:Props) => {
  return (
    <Modal
      blur
      css={{ padding: "20px" }}
      closeButton
      preventClose
      aria-labelledby="modal-title"
      open={isOpen}
      onClose={close}
    >
      <Modal.Header>
        <h4 style={{ margin: "20px auto" }}> Sorry, we have stock issues.</h4>
      </Modal.Header>
      {data.map((item)=> (
        <p key={uuidv4()} style ={{textAlign: "start"}} > {item.name} : only {item.stock} pieces in stock </p>
      ))}
      <Modal.Body></Modal.Body>
    </Modal>
  );
};

export default AlertStockModal