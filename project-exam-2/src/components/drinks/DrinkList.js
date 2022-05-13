import React, { useState, useEffect } from "react";
import Drink from "./Drink";
import "../../App.scss";
import axios from "axios";

function DrinkList() {
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
    <main className="drinks">
      <h1>Drinks</h1>
      {drinks.map(function (drink) {
        return <Drink key={drink.idDrink} drink={drink} />;
      })}
    </main>
  );
}
export default DrinkList;
