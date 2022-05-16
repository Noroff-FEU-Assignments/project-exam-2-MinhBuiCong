import React, { useState } from "react";
import HotelCard from "../card/HotelCard";
import Search from "../search/Search";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

function HotelPage() {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <main className="hotel-page-container">
      <h1 className="title">Hotels</h1>
      <div className="filter-container">
        <Search />
        <Button
          className="filter-button"
          onClick={() => setFilterOpen(!filterOpen)}
        >
          <FontAwesomeIcon icon={faFilter} />
        </Button>
      </div>
      <div className={filterOpen ? "filter-choice-visible" : "filter-choice"}>
        <Button className="brand-alternatives-button">brand</Button>
        <Button className="brand-alternatives-button">brand</Button>
        <Button className="brand-alternatives-button">brand</Button>
        <Button className="brand-alternatives-button">brand</Button>
        <Button className="brand-alternatives-button">brand</Button>
      </div>
      <HotelCard />
    </main>
  );
}

export default HotelPage;
