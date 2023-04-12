import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './Nav.scss';

const Nav = () => {
  const navigate = useNavigate();

  const goToPage = page => {
    navigate(`/${page}`);
  };

  const isLogin = localStorage.getItem('token');

  return (
    <div className="wrapper">
      <div className="navContainer">
        <div className="category">
          <Link to="/">
            <div className="insenseImg">
              <img src="/images/6ixSenseLogo.png" alt="" />
            </div>
          </Link>
          <ul className="items">
            {NAVI_MENU.map(menu => {
              return (
                <li key={menu.id}>
                  <Link to={menu.path} className="navMenu">
                    {menu.menu}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navCartAndLogin">
          <ul className="cartLogin">
            <li>
              <AiOutlineShoppingCart
                size={23}
                className="cartIcon"
                onClick={() => goToPage('cart')}
              />
            </li>
            <li>{isLogin ? '로그아웃' : '로그인'}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const NAVI_MENU = [
  {
    id: 1,
    menu: '선물',
    path: '/gift',
  },
  {
    id: 2,
    menu: '인센스',
    path: '/Detail',
  },
  {
    id: 3,
    menu: '홀더',
    path: '/Detail',
  },
  {
    id: 4,
    menu: '브랜드',
    path: '',
  },
];

export default Nav;
