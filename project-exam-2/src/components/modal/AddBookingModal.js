import React from "react";
import { useForm } from "react-hook-form";
import { useMatch } from "react-router-dom";
import { BASE_URL, headers } from "../../constants/api";
import useConfirmationModal from "../../hooks/useConfirmationModal";
import ConfirmationModal from "../modal/ConfirmationModal";

function AddBookingModal({ open, onClose }) {
  let match = useMatch();
  const { register, handleSubmit } = useForm();
  const [cMOpen, openModal, onConfirmationModalClose] =
    useConfirmationModal(onClose);
  const onSubmit = async (data) => {
    console.log("data", data);
    const name = data.firstName + " " + data.lastName;
    const url = BASE_URL + "enquiries";
    await fetch(url, {
      headers,
      method: "POST",
      body: JSON.stringify({
        ...data,
        name,
        establishmentId: match.params.id,
      }),
    });
    openModal();
  };
  return (
    <>
      <ConfirmationModal
        message="Yur enquiry has been submitted successfully!"
        open={cMOpen}
        onClose={onConfirmationModalClose}
      />
      <div
        className={`bg-gray-200 w-full min-h-screen z-40 top-0 p-4 ${
          open ? "fixed" : "hidden"
        }`}
      >
        <h2>Add Booking</h2>
        <button onClick={onClose} style={{ right: 15, top: 15 }}>
          <i className="fa fa-close"></i>
        </button>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              <label>First Name</label>
              <input name="firstName" type="text" ref={register}></input>
            </div>
            <div>
              <label>Last Name</label>
              <input name="lastName" type="text" ref={register}></input>
            </div>
          </div>
          <div>
            <label>Phone Number</label>
            <input name="phoneNumber" type="text" ref={register}></input>
          </div>
          <div>
            <label>Email</label>
            <input name="email" type="email" ref={register}></input>
          </div>
          <div>
            <label>Start Date</label>
            <input name="checkIn" type="date" ref={register}></input>
          </div>
          <div>
            <label>End Date</label>
            <input name="checkOut" type="date" ref={register}></input>
          </div>
          <div>
            <button>Book Now</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddBookingModal;
