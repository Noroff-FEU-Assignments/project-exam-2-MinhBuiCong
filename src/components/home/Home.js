import React, { useState, useEffect } from "react";
import Search from "../search/Search";
import HotelCard from "../card/HotelCard";
import { getHotels } from "../../constants/api";

const Home = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      const result = await getHotels();
      setHotels(result.data);
      setLoading(false);
    };
    fetchHotels();
  }, []);

  if (loading) {
    return (
      <main className="home-container">
        <div className="loader"></div>
      </main>
    );
  }

  return (
    <main className="home-container">
      <h1 className="title">Book your hotel</h1>
      {hotels.length > 0 && (
        <>
          <Search onSearch={setHotels} data={hotels} />
          {hotels.map((hotel) => (
            <HotelCard id={hotel.id} key={hotel.id} {...hotel.attributes} />
          ))}
        </>
      )}
    </main>
  );
};

export default Home;
