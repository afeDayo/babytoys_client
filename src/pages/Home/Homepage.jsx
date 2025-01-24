import React from "react";
import Header from "../../components/Header/Header";
import "./Homepage.css";
import Collections from "./Containers/Collections/Collections";
import TopPicks from "./Containers/TopPicks/TopPicks";
import Popular from "./Containers/Popular/Popular";
import Testimonials from "./Containers/Testimonials/Testimonials";
import Photoshoots from "./Containers/Photoshoots/Photoshoots";

const Homepage = () => {
  return (
    <div>
      <Header />
      <div>
        <Collections />
        <TopPicks />
        <Popular />
        <Testimonials />
        <Photoshoots />
      </div>
    </div>
  );
};

export default Homepage;
