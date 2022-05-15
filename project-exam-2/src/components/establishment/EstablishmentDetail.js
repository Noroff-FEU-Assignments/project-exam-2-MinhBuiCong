import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../constants/api";
import AddBookingModal from "../modal/AddBookingModal";

const HotelDetailPage = ({ match }) => {
  const id = match.params.id;
  const [hotel, setHotels] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const url = BASE_URL + "establishments/" + id;
    const options = { headers };
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setHotels(json);
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (!hotel) return <h1>Hotel not found!</h1>;

  const { name, price, description, image } = hotel;

  return (
    <>
      <AddBookingModal open={open} onClose={() => setOpen(false)} />
      <div>
        <div>
          <div style={{ top: 25 }}>{price} / day</div>
          {image && <img id="hero" src={image} alt={name} />}
        </div>
        <div className="flex">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <i className="fa fa-coffee m-3"></i>
          <i className="fa fa-shower m-3"></i>
          <i className="fa fa-wifi m-3"></i>
          <i className="fa fa-bed m-3"></i>
        </div>
        <button onClick={() => setOpen(true)}>Book Now</button>

        <h3>About hotel</h3>
        <p>{description}</p>
      </div>
    </>
  );
};

export default HotelDetailPage;
