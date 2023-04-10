import React from 'react';
import './PriceInfo.scss';

const PriceInfo = () => {
  return (
    <div className="priceInfo">
      <div className="details">
        <div className="detail">
          <p>총 포인트</p> <span>170,000원</span>
        </div>
      </div>

      <div className="details">
        <div className="detail">
          <p>상품가격</p> <span className="deliveryFee">12,002원</span>
        </div>
      </div>

      <div className="details">
        <div className="detail">
          <p>배송비</p> <span className="deliveryFee">2,000원</span>
        </div>
      </div>
      <div className="details">
        <div className="detail">
          <p>잔여 포인트</p> <span>170,000원</span>
        </div>
      </div>

      <button>결제하기</button>
    </div>
  );
};

export default PriceInfo;
