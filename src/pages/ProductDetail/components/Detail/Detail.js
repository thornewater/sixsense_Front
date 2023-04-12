import React, { useState } from 'react';
import DetailCount from './DetailCount';
import DetailHeader from './DetailHeader';
import Navigate from './Navigate';
import TotalCost from './TotalCost';
import './Detail.scss';

const Detail = () => {
  const [count, setCount] = useState(1);

  const decrease = () => {
    if (count > 1) {
      setCount(prev => prev - 1);
    }
  };

  const increase = () => {
    setCount(prev => prev + 1);
  };

  const price = 17000;
  return (
    <div className="detailProduct">
      <DetailHeader />
      <p className="priceProduct">{price.toLocaleString()}</p>
      <DetailCount count={count} decrease={decrease} increase={increase} />
      <TotalCost price={price} count={count} />
      <Navigate />
    </div>
  );
};

export default Detail;
