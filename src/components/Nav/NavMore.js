import React from 'react';
import './NavMore.scss';

const NavMore = ({ setIsActive }) => {
  const switchingOffMenu = () => {
    setIsActive(false);
  };

  return (
    <div className="moreCategory" onMouseLeave={switchingOffMenu}>
      <div className="moreWrapper">
        <div className="categoryDiv">
          <ul>
            <li>Gift</li>
          </ul>
          <ul>
            <li>Stick</li>
            <li>Corn</li>
          </ul>
          <ul>
            <li>Holder</li>
          </ul>
          <ul>
            <li>Brand</li>
          </ul>
        </div>
      </div>
      <div className="categoryImg" />
    </div>
  );
};

export default NavMore;
