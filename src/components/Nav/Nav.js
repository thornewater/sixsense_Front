import React, { useState } from 'react';
import NavMore from './NavMore';
import './Nav.scss';

const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="body">
      <div className="wrapper">
        <div className="navContainer">
          <div
            className="navLeft"
            onMouseOver={() => {
              setIsActive(true);
            }}
          >
            <div className="insenseImg" />
            <ul className="category">
              <li>선물</li>
              <li>인센스</li>
              <li>홀더</li>
              <li>브랜드</li>
            </ul>
          </div>
          <div className="navRight">
            <ul className="cartLogin">
              <li>장바구니</li>
              <li>로그인</li>
            </ul>
          </div>
          {isActive ? <NavMore setIsActive={setIsActive} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Nav;
