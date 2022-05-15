import React from "react";

// import components
import Search from "../search/Search";
import HotelCard from "../card/HotelCard";
import Footer from "./components/Footer";
import { url } from "../../constants/api";

// const FEATURED_PLACE_INDEX = 1;

function Home() {
  console.log(url);
  return (
    <main>
      <Search />
      <HotelCard />
      <Footer />
    </main>
  );
}

export default Home;
