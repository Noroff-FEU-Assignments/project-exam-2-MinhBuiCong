import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function HotelDetail() {
  const location = useLocation();
  const { props } = location.state;

  return (
    <main className="hotel-detail-container">
      <h1 className="title">{props.name}</h1>
      <div
        className="image-container"
        style={{ backgroundImage: `url(${props.image.data.attributes.url})` }}
      ></div>
      <div className="hotel-info-container">
        <h2 className="info-title">Description</h2>
        <div className="description-container">
          <p>{props.description}</p>
        </div>
        <h2 className="info-title">Location</h2>
        <p className="location-text">{props.subtitle}</p>
        <Link to="/enquiry" className="card-button">
          Make an enquiry
        </Link>
      </div>
    </main>
  );
}

export default HotelDetail;
