import React from "react";
import Container from "@material-ui/core/Container";
import Header from "../Header/Header";

import "./Home.scss";

const Home = () => {
  return (
    <Container maxWidth="xl">
      <Header />
      <div className="home-container">
        <div className="home-container__text-container">
          <span className="home-container__typewriter">
            ¿Cual es el valor de vivir?
          </span>
        </div>
      </div>
    </Container>
  );
};

export default Home;
