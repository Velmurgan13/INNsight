import React from "react";
import FeatureOne from "./featureOne/FeatureOne";
import Attraction from "./attractions/Attractions";
import GuestRooms from "./rooms/GuestRooms";
import Footer from "./footer/Footer";
function Homepage() {
  return (
    <>
      <FeatureOne />
      <GuestRooms />
      <Attraction />
      <Footer />
    </>
  );
}

export default Homepage;
