import React from 'react';
import './PriceInfo.scss';

const PriceInfo = () => {
  return (
    <div className="priceInfo">
      <div className="details">
        <div className="detail">
          <p className="payBar">
            총 포인트 <span>170,000원</span>
          </p>
        </div>
      </div>

      <div className="details">
        <div className="detail">
          <p className="payBar">
            상품가격
            <span className="deliveryFee">12,002원</span>
          </p>
        </div>
      </div>

      <div className="details">
        <div className="detail">
          <p className="payBar">
            배송비 <span className="deliveryFee">2,000원</span>
          </p>
        </div>
      </div>
      <div className="details">
        <div className="detail">
          <p className="payBar">
            잔여 포인트 <span>170,000원</span>
          </p>
        </div>
      </div>

      <button>결제하기</button>
    </div>
  );
};

export default PriceInfo;
