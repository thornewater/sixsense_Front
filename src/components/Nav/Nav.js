import React, { useState } from 'react';
import NavMore from './NavMore';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './Nav.scss';

const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="wrapper">
      <div className="navContainer">
        <div
          className="category"
          onMouseOver={() => {
            setIsActive(true);
          }}
        >
          <div className="insenseImg" />
          <ul className="items">
            <li>선물</li>
            <li>인센스</li>
            <li>홀더</li>
            <li>브랜드</li>
          </ul>
        </div>
        <div className="navCartAndLogin">
          <ul className="cartLogin">
            <li>
              <AiOutlineShoppingCart size={20} />
            </li>
            <li>로그인</li>
          </ul>
        </div>
        {isActive && <NavMore setIsActive={setIsActive} />}
      </div>
    </div>
  );
};

export default Nav;
