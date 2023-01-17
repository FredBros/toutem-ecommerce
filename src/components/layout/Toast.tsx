import React from 'react'
import { Toaster } from "react-hot-toast";


const Toast = () => {
  return (
    <Toaster
      toastOptions={{
        success: {
          style: {
            border: "3px solid var(--nextui-colors-primary",
          },
        },
        error: {
          style: {
            border: "3px solid var(--nextui-colors-errorLight",
          },
        },
      }}
    />
  );
}

export default Toast