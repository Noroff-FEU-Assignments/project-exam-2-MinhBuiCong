import React, { useState, useEffect } from "react";
import Search from "../search/Search";
import HotelCard from "../hotelCard/HotelCard";
import "../../sass/style.scss";
import axios from "axios";

function HotelList() {
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getDrinks = async () => {
    await axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then((res) => {
        setDrinks(res.data.drinks);
        setLoading(false);
      })
      .catch(function (error) {
        setError(error.message);
      });
  };

  useEffect(() => {
    getDrinks();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occured: {error}</div>;
  }

  return (
    <>
      <Search />
      <h1>Hello</h1>
      <HotelCard />
    </>
  );
}
export default HotelList;
