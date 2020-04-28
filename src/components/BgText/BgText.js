import React, { useState, useEffect } from "react";
import ModalSlide from "../ModalSlide/ModalSlide";
import "./BgText.scss";

const BgText = () => {
  const [firstMove, setFirstMove] = useState(false);
  const [hoverOnText, sethoverOnText] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [strClassOpenModal, setstrClassOpenModal] = useState("");
  /*useEffect(() => {
    document.addEventListener("keydown", handlerFirstMove, false);
    return () => {
      document.removeEventListener("keydown", handlerFirstMove, false);
    }; sethoverOnText(!hoverOnText);
  });*/

  useEffect(() => {
    const strClass = openModal ? "open" : "close";
    sethoverOnText(strClass);
  }, [openModal]);

  const handlerHovertextBg = (evt) => {
    if (!openModal) {
      const strClass = evt.type === "mouseenter" ? "hover-show" : "";
      sethoverOnText(strClass);
    }
  };

  const handlerClicktextBg = (evt) => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <ModalSlide
        hoverOn={hoverOnText}
        showModal={openModal}
        closeModal={() => setOpenModal(false)}
      />
      <div className="bgText-container">
        <TextDisplay
          classSpan="typewriter"
          hoverFunction={handlerHovertextBg}
          clickHandler={handlerClicktextBg}
          id="textBg"
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
