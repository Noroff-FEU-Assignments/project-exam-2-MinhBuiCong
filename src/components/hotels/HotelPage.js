import React, { useState, useEffect } from "react";
import HotelCard from "../card/HotelCard";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { getUsername } from "../auth/storage";
import { getHotels } from "../../constants/api";

function HotelPage() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      const result = await getHotels();
      setHotels(result.data);
    };
    fetchHotels();
  }, []);

  return (
    <main className="hotel-page-container">
      <h1 className="title">
        Hotels
        {getUsername() ? <span className="admin-title"> - Admin</span> : <></>}
      </h1>
      {getUsername() ? (
        <div className="add-hotels-container">
          <Link to="/admin/establishment">
            <Button className="add-hotels-button">
              <FontAwesomeIcon icon={faAdd} />
            </Button>
          </Link>
        </div>
      ) : null}
      {hotels.length > 0 &&
        hotels.map((hotel) => (
          <HotelCard id={hotel.id} key={hotel.id} {...hotel.attributes} />
        ))}
    </main>
  );
}

export default HotelPage;
