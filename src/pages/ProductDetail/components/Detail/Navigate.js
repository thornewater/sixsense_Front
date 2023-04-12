import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navigate.scss';

const Navigate = ({ id, count }) => {
  const [cart, setCart] = useState([]);
  const goToCart = () => {
    fetch('http://10.58.52.91:3000/carts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;chartset=utf-8',
        authorization: localStorage.getItem('TOKEN'),
      },
      body: JSON.stringify({
        productId: id,
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
      <Link className="carts link" to="/cart" onClick={goToCart}>
        장바구니
      </Link>
      <Link className="cash link" to="/payment">
        바로구매
      </Link>
    </div>
  );
};

export default Navigate;
