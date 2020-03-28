import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Header from "../Header/Header";

import "./Home.scss";

/**
 * Display home view
 */
const Home = () => {
  const [firstMove, setFirstMove] = useState(false);
  const handlerFirstMove = () => {
    setFirstMove(true);
  };

  useEffect(() => {
    document.addEventListener("keydown", handlerFirstMove, false);
    return () => {
      document.removeEventListener("keydown", handlerFirstMove, false);
    };
  }, [firstMove]);

  return (
    <Container maxWidth="xl">
      <Header />
      <div className="home-container">
        <TextDisplay classSpan="typewriter">
          ¿Cual es el valor de vivir?
        </TextDisplay>
        {!firstMove && (
          <TextDisplay classSpan="info-aux">
            Presiona cualquier tecla...
          </TextDisplay>
        )}
      </div>
    </Container>
  );
};

export default Home;

/**Text that change */
const TextDisplay = props => {
  const { classSpan, children } = props;
  return (
    <div className="home-container__text-container">
      <span className={`home-container__${classSpan}`}>{children}</span>
    </div>
  );
};
