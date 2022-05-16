import React from "react";
import HotelCard from "../card/HotelCard";
import Search from "../search/Search";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

function HotelPage() {
  return (
    <main className="hotel-page-container">
      <h1 className="title">Hotels</h1>
      <div className="filter-container">
        <Search />
        <Button className="filter-button">
          <FontAwesomeIcon icon={faFilter} />
        </Button>
      </div>
      <HotelCard />
    </main>
  );
}

export default HotelPage;
