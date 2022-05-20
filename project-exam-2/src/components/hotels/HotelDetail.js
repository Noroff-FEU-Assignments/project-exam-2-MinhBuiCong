import React from "react";
import { Link } from "react-router-dom";

function HotelDetail() {
  return (
    <main className="hotel-detail-container">
      <h1 className="title">hotel-name</h1>
      <div className="image-container">
        <img className="image" alt="hotel-image" />
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
