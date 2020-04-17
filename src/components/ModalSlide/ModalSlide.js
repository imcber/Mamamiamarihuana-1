import React, { useEffect } from "react";

import "./ModalSlide.scss";

const ModalSlide = (props) => {
  const { hoverOn, showModal, closeModal } = props;
  let classNameModal = `ModalSlide ModalSlide__${
    showModal ? "open" : hoverOn ? "hover-show" : "close"
  }`;

  return (
    <div className={classNameModal}>
      <div className="ModalSlide__container"></div>
      <div
        className="ModalSlide__container reverse-md"
        onClick={closeModal}
      ></div>
    </div>
  );
};

export default ModalSlide;
