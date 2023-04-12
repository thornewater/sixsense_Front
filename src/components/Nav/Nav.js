import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './Nav.scss';

const Nav = () => {
  const navigate = useNavigate();

  const goToPage = page => {
    navigate(`/${page}`);
  };

  const isLogin = !!localStorage.getItem('token');
  const token = localStorage.getItem('token');

  const checkUser = () =>
    fetch('http://', {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        if (res.ok) {
          goToPage('/cart');
        } else {
          alert('로그인이 필요한 페이지 입니다.');
        }
      })
      .catch(error => {
        console.log(error);
      });

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
            <li onClick={() => navigate('/gift')}>선물</li>
            <li onClick={() => navigate('/ProductDetail')}>인센스</li>
            <li onClick={() => navigate('/ProductDetail')}>홀더</li>
            <li>브랜드</li>
          </ul>
        </div>
        <div className="navCartAndLogin">
          <ul className="cartLogin">
            <li>
              <AiOutlineShoppingCart
                size={23}
                className="cartIcon"
                onClick={checkUser}
              />
            </li>
            <li>{isLogin ? '로그아웃' : '로그인'}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
