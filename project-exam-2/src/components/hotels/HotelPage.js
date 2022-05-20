import React, { useState, useEffect } from "react";
import HotelCard from "../card/HotelCard";
import Search from "../search/Search";
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
      <Search />
      {getUsername() ? (
        <div className="add-hotels-container">
          <Link to="/admin/establishment">
            <Button className="add-hotels-button">
              <FontAwesomeIcon icon={faAdd} />
            </Button>
          </Link>
          <Button variant="danger" className="delete-hotels-button">
            Delete Hotel
          </Button>
        </div>
      ) : null}
      {hotels !== null
        ? hotels.map((hotel) => <HotelCard {...hotel.attributes} />)
        : null}
    </main>
  );
}

export default HotelPage;
