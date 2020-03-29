import React, { useState, useEffect } from "react";
import "./BgText.scss";

const BgText = () => {
  const [firstMove, setFirstMove] = useState(false);
  const handlerFirstMove = () => {
    setFirstMove(true);
  };

  useEffect(() => {
    document.addEventListener("keydown", handlerFirstMove, false);
    return () => {
      document.removeEventListener("keydown", handlerFirstMove, false);
    };
  });

  return (
    <div className="bgText-container">
      <TextDisplay classSpan="typewriter">
        ¿Cual es el valor de vivir?
      </TextDisplay>
      <TextDisplay classSpan="info-aux">
        Presiona cualquier tecla...
      </TextDisplay>
    </div>
  );
};
export default BgText;

/**Text that change
 *
 * Class name of span has 'bgText-container__'
 */

const TextDisplay = props => {
  const { classSpan, children } = props;
  return (
    <div className="bgText-container__text-container">
      <span className={`bgText-container__${classSpan}`}>{children}</span>
    </div>
  );
};
