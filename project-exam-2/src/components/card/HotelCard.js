import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import image from "../../images/image-1.jpg";

function HotelCard() {
  return (
    <main className="card-container">
      <Card className="card">
        <Card.Img className="card-image" src={image} alt="image" />
        <Card.Body className="card-text-container">
          <Card.Title className="card-title">Card Title</Card.Title>
          <Card.Text className="card-subtitle">Location</Card.Text>
          <Card.Text className="card-description">Description...</Card.Text>
          <Link to="/enquiry" className="card-button">
            Make an enquiry
          </Link>
        </Card.Body>
      </Card>
    </main>
  );
}

export default HotelCard;
