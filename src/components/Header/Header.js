import React from "react";

import "./Header.scss";

const Header = () => {
  const LenguangeItem = props => {
    const { value } = props;
    return <span className="header-container__text lengu">{value}</span>;
  };

  return (
    <div className="header">
      <div className="header-container">
        <div className="header-container__info">
          <div className="header-container__info__title-board">
            <span className="header-container__text">captainimc.com</span>
          </div>
        </div>
        <div className="header-container__lg">
          <LenguangeItem value="ES" />
          <LenguangeItem value="EN" />
        </div>
      </div>
    </div>
  );
};

export default Header;
