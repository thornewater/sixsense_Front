import React, { useEffect, useState } from 'react';
import { CartItems } from './CartItems';
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
          <div className="cartChoice">
            <div className="allChk">
              <input type="checkbox" className="checkbox" />
              <div className="allSelect">전체선택</div>
            </div>
            <div className="selectDel">
              <div className="borderLine" />
              <button className="selectChk">선택 삭제</button>
            </div>
          </div>
          <CartItems lists={lists} />
          <div className="orderBtnContainer">
            <div className="upperBtnBox">
              <button>선택상품 주문</button>
              <button>선택상품 선물하기</button>
            </div>
            <div className="bottomBtnBox">
              <button>전체상품 주문하기</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
