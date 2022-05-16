import React from "react";
import HotelCard from "../card/HotelCard";
import Search from "../search/Search";
import Button from "react-bootstrap/Button";

function HotelPage() {
  return (
    <main className="hotel-page-container">
      <h1 className="title">Hotels</h1>
      <div className="filter-container">
        <Search />
        <Button className="filter-button">Filter</Button>
      </div>
      <HotelCard />
    </main>
  );
}

export default HotelPage;
