import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './Nav.scss';

const Nav = () => {
  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();

  const TOKEN = 'hyominShin013';

  const goToPage = page => {
    isLogin ? navigate(`/${page}`) : alert('로그인을 해주시기 바랍니다.');
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
                onClick={() => goToPage('cart')}
              />
            </li>
            {isLogin
              ? (localStorage.setItem('TOKEN', JSON.stringify(TOKEN)),
                (<li onClick={() => setIsLogin(!isLogin)}>로그아웃</li>))
              : (localStorage.removeItem('TOKEN', JSON.stringify(TOKEN)),
                (<li onClick={() => setIsLogin(!isLogin)}>로그인</li>))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
