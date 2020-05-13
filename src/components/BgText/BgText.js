import React, { useState, useEffect } from "react";
import ModalSlide from "../ModalSlide/ModalSlide";
import "./BgText.scss";

const BgText = () => {
  const [firstMove, setFirstMove] = useState(false);
  //state para saber si entra o sale el mouse
  const [hoverOnText, sethoverOnText] = useState("");
  //state para saber si esta activo el modal
  const [openModal, setOpenModal] = useState(false);

  const [endTrans, setEndTrans] = useState(true);
  /*useEffect(() => {
    document.addEventListener("keydown", handlerFirstMove, false);
    return () => {
      document.removeEventListener("keydown", handlerFirstMove, false);
    }; sethoverOnText(!hoverOnText);
  });*/

  useEffect(() => {
    const strClass = openModal ? "open" : "close";
    sethoverOnText(strClass);
    setTimeout(() => {
      setEndTrans(!openModal ? true : false);
    }, 1100);
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
        closeModal={() => setOpenModal(false)}
      ></ModalSlide>
      <div className="bgText-container">
        <TextDisplay
          classSpan="typewriter"
          hoverFunction={endTrans ? handlerHovertextBg : null}
          clickHandler={handlerClicktextBg}
          id="textBg"
        >
          WRITE SOMETHING GREAT
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
