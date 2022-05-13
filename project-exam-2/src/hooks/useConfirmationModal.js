import { useState } from "react";

function UseConfirmationModal(postCloseCallback) {
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
    postCloseCallback && postCloseCallback();
  };

  const openModal = () => {
    setOpen(true);
  };
  return [open, openModal, onClose];
}

export default UseConfirmationModal;
