import React from 'react';
import './TotalCost.scss';

const TotalCost = ({ price, count }) => {
  return (
    <div className="totalCost">
      <span className="title">상품금액 합계 </span>
      <span className="cost">{price * count}</span>
    </div>
  );
};
export default TotalCost;
