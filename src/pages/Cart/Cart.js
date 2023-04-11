import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartItems } from './CartItems';
import { PriceInfo } from './PriceInfo';
import './Cart.scss';

const Cart = () => {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    fetch('/data/cart.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => setLists(data));
  }, []);

  return (
    <div className="cart">
      <section className="cartBanner">
        <div className="cartTitle">
          <h2 className="titleText">장바구니</h2>
        </div>
      </section>
      <section className="cartInner">
        <div className="cartList">
          <CartItems lists={lists} setLists={setLists} />
          <div className="orderBtnContainer">
            <div className="upperBtnBox">
              <button>
                <Link to="/Payment">선택상품 주문</Link>
              </button>
              <button>
                <Link to="/Gift">선택상품 선물하기</Link>
              </button>
            </div>
            <div className="bottomBtnBox">
              <button>전체상품 주문하기</button>
            </div>
          </div>
        </div>
        <div className="priceInfoBox">
          <PriceInfo lists={lists} />
        </div>
      </section>
    </div>
  );
};

export default Cart;
