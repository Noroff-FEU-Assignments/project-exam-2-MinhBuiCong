import React, { useState, useEffect } from "react";

// import components
import Search from "../search/Search";
import HotelCard from "../card/HotelCard";
import { getHotels } from "../../constants/api";

const Home = () => {
  const [hotels, setHotels] = useState("");
  useEffect(() => {
    getHotels(setHotels);
  }, []);
  console.log(hotels.data);

  return (
    <main className="home-container">
      <h1 classname="title">Book your hotel</h1>
      <Search />
      <HotelCard />
    </main>
  );
};

export default Home;
