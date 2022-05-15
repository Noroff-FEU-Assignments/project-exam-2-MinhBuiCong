import React from "react";
import { Link } from "react-router-dom";

const HotelCard = ({ name, image, description, rating, link }) => {
  return (
    <Link to={link}>
      <div>
        <img src={image} alt={name} />
        <div>
          <h4>
            {name}
            <span>
              {rating || 4} <i className="fa fa-star"></i>
            </span>
          </h4>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;
