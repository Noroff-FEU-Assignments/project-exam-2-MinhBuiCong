import React, { useEffect } from "react";

function ConfirmationModal({ open, message, onClose }) {
  useEffect(() => {
    let timer;
    if (open) {
      timer = setTimeout(onClose, 3000);
    }
    return () => open && clearTimeout(timer);
  }, [open, onClose]);
  return (
    <div
      className={`flex justify-center items-center bg-gray-900 bg-opacity-75 w-screen h-screen z-50 top-0 p-4 ${
        open ? "fixed" : "hidden"
      }`}
    >
      <div>
        <i className="fa fa-check text-5xl"></i>
        <h2>Confirmation</h2>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default ConfirmationModal;
