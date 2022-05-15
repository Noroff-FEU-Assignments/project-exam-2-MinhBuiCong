import React from "react";
import { Link } from "react-router-dom";

function FeaturedPlace({
  name = "Apartment in City",
  price,
  description,
  image,
  id,
}) {
  return (
    <div>
      <h6>Featured place</h6>
      <div>
        {image && <img src={image} alt={name} />}
        <div style={{ top: 25 }}>{price} / day</div>
      </div>
      <h6>{name}</h6>
      <p>
        {description ||
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
      </p>
      <Link to={`hotels/${id}`}>
        <button>Check out this place</button>
      </Link>
    </div>
  );
}

export default FeaturedPlace;
