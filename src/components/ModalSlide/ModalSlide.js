import React from "react";

import "./ModalSlide.scss";

const ModalSlide = (props) => {
  const { hoverOn, showModal } = props;
  const classNameModal = `ModalSlide ModalSlide__${
    showModal ? "open" : hoverOn ? "hover-show" : ""
  }`;

  return (
    <div className={classNameModal}>
      <div className="ModalSlide__container"></div>
      <div className="ModalSlide__container reverse-md"></div>
    </div>
  );
};

export default ModalSlide;
