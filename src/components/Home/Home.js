import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Header from "../Header/Header";
import BgText from "../BgText/BgText";
import useStateData from "../../hooks/useStateData";

import "./Home.scss";

/**
 * Display home view
 */
const Home = () => {
  return (
    <Container maxWidth="xl">
      <Header />
      <div className="home-container">
        <BgText />
      </div>
    </Container>
  );
};

export default Home;
