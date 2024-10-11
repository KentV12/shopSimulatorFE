import React from 'react';

import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

const Toast = () => {
  return <ToastContainer />;
}

export const showToast = (message, type = "success") => {
  toast[type](message, {
    position: "bottom-right",
    autoClose: 2000,  // Closes after 2 seconds
  });
};

export default Toast