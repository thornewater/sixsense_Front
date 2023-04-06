import React, { useEffect, useState } from 'react';
import './Cart.scss';

const Cart = () => {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    fetch('/public/data/cart.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => setLists(data));
  }, []);

  return (
    <div className="Cart">
      <section className="cartBanner">
        <div className="cartTitle">
          <h2>장바구니</h2>
        </div>
      </section>
      <section className="cartInner">
        <div className="cartChoice">
          <div className="allSelect">전체선택</div>
          <div className="selectDel">선택 삭제</div>
        </div>
        <div className="cartList" />
      </section>
    </div>
  );
};

export default Cart;
