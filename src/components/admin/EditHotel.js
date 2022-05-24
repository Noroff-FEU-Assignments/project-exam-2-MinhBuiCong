import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BASE_URL, headers, PATCH } from "../../constants/api";
import DeleteHotel from "./DeleteHotel";

function AddHotel() {
  const defaultState = {
    name: "",
    email: "",
  };

  const history = useNavigate();
  const { register, handleSubmit } = useForm();
  const [hotel, setHotel] = useState(defaultState);

  let { id } = useParams();

  useEffect(() => {
    const fetchUrl = BASE_URL + "establishments/" + id;
    const options = { headers };

    fetch(fetchUrl, options)
      .then((response) => response.json())
      .then((json) => setHotel(json))
      .catch((error) => console.log(error));
  }, [id]);

  async function onSubmit(data) {
    const fetchUrl = BASE_URL + "establishments/" + id;

    const updateOptions = {
      headers,
      method: PATCH,
      body: JSON.stringify(data),
    };
    await fetch(fetchUrl, updateOptions);
    history.push("/admin/hotels");
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Edit Establishment</h1>
        <div>
          <label>Name</label>
          <input
            ref={register}
            defaultValue={hotel.name}
            name="name"
            type="text"
            placeholder="Enter a name for the Hotel"
          ></input>
        </div>
        <div>
          <label>Image</label>
          <input
            ref={register}
            defaultValue={hotel.image}
            name="image"
            type="text"
            placeholder="URL of the image"
          ></input>
        </div>
        <div>
          <label>Contact</label>
          <input
            ref={register}
            defaultValue={hotel.email}
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
              defaultValue={hotel.price}
              name="price"
              type="text"
              placeholder="Rate per day"
            ></input>
          </div>
          <div>
            <label>Max Guests</label>
            <input
              ref={register}
              defaultValue={hotel.maxGuests}
              name="maxGuests"
              type="text"
              placeholder="Maximum Guests"
            ></input>
          </div>
        </div>
        <button type="submit">Save</button>
        <DeleteHotel id={id} />
      </form>
    </>
  );
}

export default AddHotel;
