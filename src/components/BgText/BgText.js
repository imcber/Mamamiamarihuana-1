import React, { useState, useEffect } from "react";
import ModalSlide from "../ModalSlide/ModalSlide";
import "./BgText.scss";

const BgText = () => {
  const [firstMove, setFirstMove] = useState(false);
  const [hoverOnText, sethoverOnText] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  /*useEffect(() => {
    document.addEventListener("keydown", handlerFirstMove, false);
    return () => {
      document.removeEventListener("keydown", handlerFirstMove, false);
    }; sethoverOnText(!hoverOnText);
  });*/

  return (
    <>
      <ModalSlide hoverOn={hoverOnText} showModal={openModal} />
      <div className="bgText-container">
        <TextDisplay
          classSpan="typewriter"
          hoverFunction={() => sethoverOnText(!hoverOnText)}
          clickHandler={() => setOpenModal(!openModal)}
        >
          ¿Cual es el valor de vivir?
        </TextDisplay>
        <TextDisplay classSpan="info-aux">
          Presiona cualquier tecla...
        </TextDisplay>
      </div>
    </>
  );
};
export default BgText;

/**Text that change
 *
 * Class name of span has 'bgText-container__'
 */

const TextDisplay = (props) => {
  const { classSpan, children, hoverFunction, clickHandler } = props;

  return (
    <div
      className="bgText-container__text-container"
      onMouseEnter={hoverFunction ? hoverFunction : () => {}}
      onMouseLeave={hoverFunction ? hoverFunction : () => {}}
      onClick={clickHandler ? clickHandler : () => {}}
    >
      <span className={`bgText-container__${classSpan}`}>{children}</span>
    </div>
  );
};
