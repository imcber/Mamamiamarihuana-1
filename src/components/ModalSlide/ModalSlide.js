import React, { useEffect } from "react";

import "./ModalSlide.scss";

import Woman from "../../assets/images/person.jpg";

const ModalSlide = (props) => {
  const { hoverOn, closeModal } = props;
  let classNameModal = `ModalSlide ModalSlide__${hoverOn} bg-opacity-25 bg-pink-400`;

  return (
    <div className={classNameModal}>
      <ModalSection classes="ModalSlide__container reverse-l ">
        <div className="w-full">
          <p className="text-indigo-800 px-8 py-5 text-4xl font-medium text-modal font-bold">
            Hola, soy Name
          </p>
        </div>
        <div className="w-full">
          <p className="text-indigo-800 px-10 font-medium text-modal text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl">
            Id occaecat id non cupidatat dolor velit. Minim deserunt minim nulla
            duis. Mollit sit officia nisi consectetur sit duis consectetur
            ullamco. Ut magna anim adipisicing ut tempor. Sit Lorem amet sunt
            enim sit.
          </p>
        </div>
      </ModalSection>

      <ModalSection classes="w-6/12">
        <div className="w-full h-full reverse-r absolute"></div>
        <div className="flex w-auto justify-center ">
          <img
            alt="me"
            src={Woman}
            className="rounded-b-full flex h-auto w-1/4 justify-center absolute shadow-md prof-image"
            onClick={closeModal}
          />
        </div>
      </ModalSection>
    </div>
  );
};

const ModalSection = ({ children, classes }) => {
  return <div className={classes}>{children}</div>;
};

export default ModalSlide;
