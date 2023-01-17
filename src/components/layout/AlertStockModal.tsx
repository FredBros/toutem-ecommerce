import { Modal } from '@nextui-org/react'
import React from 'react'


type Props = {
    isOpen: boolean
    close: ()=> void
}

const AlertStockModal = ({ isOpen, close }:Props) => {
  return (
    <Modal
      blur
      css={{ paddingBottom: "20px" }}
      closeButton
      preventClose
      aria-labelledby="modal-title"
      open={isOpen}
      onClose={close}
    >
      <Modal.Body>
        <h4 style={{ margin: "20px auto" }}> Sorry, we have stock issues.</h4>
        
      </Modal.Body>
    </Modal>
  );
};

export default AlertStockModal