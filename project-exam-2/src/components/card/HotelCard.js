import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function HotelCard() {
  return (
    <main className="card-container">
      <Card className="card">
        <Card.Img className="card-image" src="holder.js/100px180" />
        <Card.Body className="card-text-container">
          <Card.Title className="card-title">Card Title</Card.Title>
          <Card.Text className="card-subtitle">Location</Card.Text>
          <Card.Text className="card-description">Description...</Card.Text>
          <Button className="card-button">Go somewhere</Button>
        </Card.Body>
      </Card>
    </main>
  );
}

export default HotelCard;
