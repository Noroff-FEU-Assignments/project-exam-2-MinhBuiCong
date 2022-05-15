import React from "react";
import { useForm } from "react-hook-form";
import { BASE_URL, headers } from "../../../constants/api";
import useConfirmationModal from "../../../hooks/useConfirmationModal";
import ConfirmationModal from "../../modal/ConfirmationModal";

function Questions() {
  const { register, handleSubmit } = useForm();
  const [open, openModal, onClose] = useConfirmationModal();
  const onSubmit = async ({ name, email, message }) => {
    const MESSAGE_URL = BASE_URL + "contacts";
    if (name && email && message) {
      await fetch(MESSAGE_URL, {
        headers,
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });
      openModal();
    }
  };

  return (
    <>
      <ConfirmationModal
        message={"Your message has been sent successfully"}
        open={open}
        onClose={onClose}
      />
      <div>
        <div>
          <img src="/logo-white.svg" alt="white logo" />
        </div>
        <h4>Questions?</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="mb-2">Name</label>
          <input name="name" type="text" ref={register} required></input>
          <label className="mb-2">Email</label>
          <input name="email" type="email" ref={register} required></input>
          <label>Message</label>
          <textarea name="message" ref={register} required></textarea>
          <button>Send Message</button>
        </form>
      </div>
    </>
  );
}

export default Questions;
