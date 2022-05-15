import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function HotelCard() {
  return (
    <main className="card-container">
      <Card className="card" style={{ width: "20rem" }}>
        <Card.Img className="card-image" src="holder.js/100px180" />
        <Card.Body className="card-text-container">
          <Card.Title className="card-title">Card Title</Card.Title>
          <Card.Text className="card-description">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button className="card-button">Go somewhere</Button>
        </Card.Body>
      </Card>
    </main>
  );
}

export default HotelCard;
