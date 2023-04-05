import React from 'react';
import './TotalCost.scss';

const TotalCost = ({ price, count }) => {
  return (
    <div className="totalCost">
      <span className="totalAmount">상품금액 합계 </span>
      <span className="cost"> {(price * count).toLocaleString()}</span>
    </div>
  );
};
export default TotalCost;
