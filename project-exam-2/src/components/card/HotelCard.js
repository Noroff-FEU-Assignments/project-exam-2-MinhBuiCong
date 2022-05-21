import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import image from "../../images/image-1.jpg";
import { getUsername } from "../auth/storage";
import { useNavigate } from "react-router-dom";

function HotelCard(props) {
  const navigate = useNavigate();
  const { name, subtitle, description, uid, id } = props;
  console.log(props);

  const handleEnquiry = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate("/enquiry");
  };

  return (
    <main className="card-container">
      <Link className="card-detail-link" to={`api/hotel-detail?id=${id}`}>
        <Card className="card">
          <Card.Img className="card-image" src={image} alt={uid} />
          <Card.Body className="card-text-container">
            <Card.Title className="card-title">{name}</Card.Title>
            <Card.Text className="card-subtitle">{subtitle}</Card.Text>
            <Card.Text className="card-description">{description}</Card.Text>
            <Button onClick={handleEnquiry} className="card-button">
              Make an enquiry
            </Button>
            {getUsername() ? (
              <Button className="card-button delete-hotel-button">
                Delete Hotel
              </Button>
            ) : null}
          </Card.Body>
        </Card>
      </Link>
    </main>
  );
}

export default HotelCard;
