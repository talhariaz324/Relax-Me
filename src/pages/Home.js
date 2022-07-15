import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeatureRooms";

export default function Home({ serviceState }) {
  return (
    <>
      <Hero>
        {/* We are able to call the another component within the other component is because of the children props */}
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          {/* We are able to call the another component within the other component is because of the children props */}
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services serviceState={serviceState} />
      <FeaturedRooms />
    </>
  );
}
