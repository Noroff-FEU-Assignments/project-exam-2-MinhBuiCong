// import React from "react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

// function Home({ drink }) {
//   const { idDrink, strDrink } = drink;

//   return (
//     <main>
//       <Link to={`detail/${idDrink}`} state={{ drink: drink }}>
//         <h5>{strDrink}</h5>
//       </Link>
//     </main>
//   );
// }

// Home.propTypes = {
//   drink: PropTypes.shape({
//     idDrink: PropTypes.string,
//     strDrink: PropTypes.string,
//   }),
// };
// export default Home;
import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../constants/api";
import PopularPlaces from "./components/PopularPlaces";

// import components
import Search from "../search/Search";
import FeaturedPlace from "./components/FeaturedPlace";
import Questions from "./components/Questions";
import Footer from "./components/Footer";

const FEATURED_PLACE_INDEX = 1;

function Home() {
  const [accommodations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(true);
  // TODO: Add loading spinner
  console.log("loading", loading);

  useEffect(() => {
    const establishmentURL = BASE_URL + "establishments";
    const options = { headers };
    fetch(establishmentURL, options)
      .then((response) => response.json())
      .then((json) => {
        setAccommodations(json);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const featuredPlace =
    accommodations.length > 0 ? accommodations[FEATURED_PLACE_INDEX] : {};

  return (
    <>
      <Search accommodations={accommodations} />
      <PopularPlaces places={accommodations} />
      <FeaturedPlace {...featuredPlace} />
      <Questions />
      <Footer />
    </>
  );
}

export default Home;
