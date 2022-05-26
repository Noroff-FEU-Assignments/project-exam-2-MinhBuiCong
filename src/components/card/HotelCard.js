import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { getUsername } from "../auth/storage";
import { useNavigate } from "react-router-dom";
import { deleteHotel } from "../../constants/api";

function HotelCard(props) {
  const navigate = useNavigate();
  const { name, subtitle, description, id, image } = props;

  const imageUrl = image?.data?.attributes?.url;

  const handleEnquiry = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate("/enquiry");
  };
  const handleDelete = (id) => {
    deleteHotel(id);
    navigate("/");
  };

  return (
    <main className="card-container">
      {getUsername() ? (
        <Button
          onClick={() => handleDelete(id)}
          className="card-button delete-hotel-button"
        >
          Delete Hotel
        </Button>
      ) : null}
      <Link className="card-detail-link" to={`api/hotel-detail?id=${id}`}>
        <Card className="card">
          <Card.Img
            className="card-image"
            src={imageUrl || ""}
            alt="image not found"
          />
          <Card.Body className="card-text-container">
            <Card.Title className="card-title">{name}</Card.Title>
            <Card.Text className="card-subtitle">{subtitle}</Card.Text>
            <Card.Text className="card-description">{description}</Card.Text>
            <Button onClick={handleEnquiry} className="card-button">
              Make an enquiry
            </Button>
          </Card.Body>
        </Card>
      </Link>
    </main>
  );
}

export default HotelCard;
