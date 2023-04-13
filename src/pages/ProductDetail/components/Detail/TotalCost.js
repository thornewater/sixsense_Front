import React from 'react';
import './TotalCost.scss';

const TotalCost = ({ price, count, discountRate }) => {
  return (
    <div className="totalCost">
      <span className="totalAmount">상품금액 합계 </span>
      <span className="cost">
        {(Number(price) * Number(1 - discountRate) * count).toLocaleString()}
      </span>
    </div>
  );
};
export default TotalCost;
