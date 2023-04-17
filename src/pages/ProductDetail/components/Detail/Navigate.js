import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navigate.scss';

const Navigate = ({ goodsId, count }) => {
  const [cart, setCart] = useState({});
  const detailToCart = goodsId => {
    console.log(goodsId);
    fetch('http://10.58.52.92:3000/carts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        productId: goodsId,
        quantity: count,
      }),
    })
      .then(res => res.json())
      .then(result => setCart(result));
  };
  return (
    <div className="navigate">
      <Link className="gift link" to="/gift/{id}">
        선물하기
      </Link>
      <Link
        className="carts link"
        to="/cart"
        state="fromDetail"
        onClick={() => {
          detailToCart(goodsId);
        }}
      >
        장바구니
      </Link>
      <Link className="cash link" to="/payment">
        바로구매
      </Link>
    </div>
  );
};

export default Navigate;
