import React from "react";
import { Link } from "react-router-dom";

const PlaceTile = ({ id, name, image, price, rating }) => {
  return (
    <div>
      <Link to={`/hotels/${id}`}>
        <img src={image} alt={name} />
        <div style={{ top: 25 }}>{price} / day</div>
        <div>
          {rating} <i className="fa fa-star"></i>
        </div>
      </Link>
    </div>
  );
};

const LoadingTile = () => <div />;

function PopularPlaces({ places = [] }) {
  return (
    <div>
      <h6>Popular places</h6>
      <div>
        {places.length > 0
          ? places.map((place) => (
              <PlaceTile
                key={place.id}
                price={place.price}
                rating={4}
                image={place.image}
                id={place.id}
                name={place.name}
              />
            ))
          : Array.from({ length: 6 }).map((_, index) => (
              <LoadingTile key={index} />
            ))}
      </div>
    </div>
  );
}

export default PopularPlaces;
