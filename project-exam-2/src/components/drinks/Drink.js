import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Drink({ drink }) {
  console.log("drink", drink);
  const { idDrink, strDrink } = drink;

  return (
    <main>
      <Link to={`detail/${idDrink}`} state={{ drink: drink }}>
        <h5>{strDrink}</h5>
      </Link>
    </main>
  );
}

Drink.propTypes = {
  drink: PropTypes.shape({
    idDrink: PropTypes.string,
    strDrink: PropTypes.string,
  }),
};
export default Drink;
