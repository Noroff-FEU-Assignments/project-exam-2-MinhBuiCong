import React from "react";
import { useForm } from "react-hook-form";
import { BASE_URL, headers } from "../../constants/api";
import ConfirmationModal from "../modal/ConfirmationModal";
import useConfirmationModal from "../../hooks/useConfirmationModal";
import Footer from "../home/components/Footer";

function ContactPage() {
  const { register: contact, handleSubmit } = useForm();
  const [open, openModal, onClose] = useConfirmationModal();
  async function onSubmit(data) {
    console.log("data", data);
    const url = BASE_URL + "contacts";
    const options = { headers, method: "POST", body: JSON.stringify(data) };

    await fetch(url, options);
    openModal();
  }

  return (
    <>
      <ConfirmationModal
        open={open}
        onClose={onClose}
        message={"Your Query has been recorded successfully"}
      />
      <div>
        <h4>Contact Us</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Name</label>
          <input name="name" type="text" ref={contact()} required></input>
          <label>Email</label>
          <input name="email" type="email" ref={contact()} required></input>
          <label>Message</label>
          <textarea name="message" ref={contact()} required></textarea>
          <button>Send Message</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;
