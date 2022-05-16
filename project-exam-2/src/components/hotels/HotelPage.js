import React, { useState } from "react";
import HotelCard from "../card/HotelCard";
import Search from "../search/Search";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function HotelPage() {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <main className="hotel-page-container">
      <h1 className="title">
        Hotels <span className="admin-title">- Admin</span>
      </h1>
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
      <div className="add-hotels-container">
        <Link to="/admin/establishment">
          <Button className="add-hotels-button">
            <FontAwesomeIcon icon={faAdd} />
          </Button>
        </Link>
      </div>
      <HotelCard />
    </main>
  );
}

export default HotelPage;
