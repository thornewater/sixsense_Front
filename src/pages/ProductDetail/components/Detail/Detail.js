import React, { useState } from 'react';
import './Detail.scss';
import DetailCount from './DetailCount';
import DetailHeader from './DetailHeader';
import Navigate from './Navigate';
import TotalCost from './TotalCost';
const Detail = () => {
  const [count, setCount] = useState(1);

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increase = () => {
    setCount(count + 1);
  };

  const price = 17000;
  return (
    <div className="detail">
      <DetailHeader />
      <p className="price">{price}</p>
      <DetailCount count={count} decrease={decrease} increase={increase} />
      <TotalCost price={price} count={count} />
      <Navigate />
    </div>
  );
};

export default Detail;
