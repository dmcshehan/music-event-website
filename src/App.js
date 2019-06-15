import React from "react";
import "./resources/styles.css";

import { Element } from "react-scroll";

import Header from "./components/header,footer/Header";
import Featured from "./components/featured/index";
import VenueNfo from "./components/venueNfo/venueNfo";
import Highlights from "./components/Highlights/index";
import Pricing from "./components/Pricing/index";
import Location from "./components/Location/index";
import Footer from "./components/header,footer/Footer";

function App() {
  return (
    <div className="App" style={{ height: 2000 }}>
      <Header />
      <Element name="start">
        <Featured />
      </Element>
      <Element name="venueinfo">
        <VenueNfo />
      </Element>
      <Element name="highlights">
        <Highlights />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>
      <Element name="location">
        <Location />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
