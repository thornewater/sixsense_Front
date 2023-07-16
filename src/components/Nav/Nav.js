import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { api } from '../../api';
import './Nav.scss';

const Nav = () => {
  const navigate = useNavigate();

  const goToPage = page => {
    navigate(`/${page}`);
  };

  const isLogin = localStorage.getItem('token');

  const logOutFetch = () => {
    fetch(`${api.logOut}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      credentials: 'include',
    })
      .then(res => {
        return res.json();
      })
      .then(logOutData =>
        logOutData.data === 'SUCCESS'
          ? (localStorage.removeItem('token'),
            alert('로그아웃에 성공했습니다.'),
            navigate('/'))
          : alert('로그아웃이 되지 않았습니다.')
      );
  };

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
            {isLogin ? (
              <li onClick={logOutFetch}>로그아웃</li>
            ) : (
              <li
                onClick={() => {
                  navigate('/signin');
                }}
              >
                로그인
              </li>
            )}
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
  },
  {
    id: 2,
    menu: '인센스',
    path: '/productlist',
  },
  {
    id: 3,
    menu: '홀더',
  },
  {
    id: 4,
    menu: '브랜드',
  },
];

export default Nav;
