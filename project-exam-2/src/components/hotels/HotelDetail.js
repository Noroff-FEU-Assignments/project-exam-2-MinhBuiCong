// import React, { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../constants/api";
// import { getHotels } from "../../constants/api";

function HotelDetail() {
  // const [hotels, setHotels] = useState([]);
  // useEffect(() => {
  //   const fetchHotels = async () => {
  //     const result = await getHotels();

  //     setHotels(result.data);
  //   };
  //   fetchHotels();
  // }, []);

  // console.log(hotels);

  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");
  const hotelDetail = BASE_URL + "api/hotel-detail?id=" + id;

  console.log(hotelDetail);
  // async function getProductDetail() {
  //   try {
  //     const response = await fetch(hotelDetail);
  //     const hotels = await response.json();
  //     console.log(hotels);
  //   } catch (error) {
  //     alert("nothing here");
  //   }
  // }

  // getProductDetail();
  return (
    <main className="hotel-detail-container">
      <h1 className="title">hotel-name</h1>
      <div className="image-container">
        <img className="image" alt="hotelimage" />
      </div>
      <div className="hotel-info-container">
        <h2 className="info-title">Description</h2>
        <div className="description-container">
          <p>lorem ipsum text</p>
        </div>
        <h2 className="info-title">Location</h2>
        <p className="location-text">location</p>
        <Link to="/enquiry" className="card-button">
          Make an enquiry
        </Link>
      </div>
    </main>
  );
}

export default HotelDetail;
