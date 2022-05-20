import React, { useState, useEffect } from "react";

// import components
import Search from "../search/Search";
import HotelCard from "../card/HotelCard";
import { getHotels } from "../../constants/api";

const Home = () => {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    const fetchHotels = async () => {
      const result = await getHotels();

      setHotels(result.data);
    };
    fetchHotels();
  }, []);

  console.log("1", hotels);

  return (
    <main className="home-container">
      <h1 className="title">Book your hotel</h1>
      <Search />
      {hotels !== null ? (
        hotels.map((hotel) => <HotelCard {...hotel.attributes} />)
      ) : (
        <></>
      )}
    </main>
  );
};

export default Home;
