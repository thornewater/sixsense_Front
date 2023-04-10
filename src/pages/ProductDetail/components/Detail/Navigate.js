import React from 'react';
import { Link } from 'react-router-dom';

import './Navigate.scss';

const Navigate = () => {
  return (
    <div className="navigate">
      <Link className="gift link" to="/gift">
        선물하기
      </Link>
      <Link className="cart link" to="/cart">
        장바구니
      </Link>
      <Link className="cash link" to="/payment">
        바로구매
      </Link>
    </div>
  );
};

export default Navigate;
