import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { BASE_URL, headers } from "../../constants/api";

function AddHotel() {
  const { register, handleSubmit } = useForm();

  const history = useNavigate();

  async function onSubmit(data) {
    console.log("data", data);

    const url = BASE_URL + "establishments";

    const options = { headers, method: "POST", body: JSON.stringify(data) };

    await fetch(url, options);

    history.push("/admin/hotels");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Add New Establishment</h1>
      <div>
        <label>Name</label>
        <input
          ref={register}
          name="name"
          type="text"
          placeholder="Enter a name for the Hotel"
        ></input>
      </div>
      <div>
        <label>Image</label>
        <input
          ref={register}
          name="image"
          type="text"
          placeholder="URL of the image"
        ></input>
      </div>
      <div>
        <label>Contact</label>
        <input
          ref={register}
          name="email"
          type="email"
          placeholder="Contact email address"
        ></input>
      </div>
      <div>
        <div>
          <label>Price</label>
          <input
            ref={register}
            name="price"
            type="text"
            placeholder="Rate per day"
          ></input>
        </div>
        <div>
          <label>Max Guests</label>
          <input
            ref={register}
            name="maxGuests"
            type="text"
            placeholder="Maximum Guests"
          ></input>
        </div>
      </div>
      <button type="submit">Add</button>
    </form>
  );
}

export default AddHotel;
