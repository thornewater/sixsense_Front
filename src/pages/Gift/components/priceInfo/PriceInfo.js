import React from 'react';
import './PriceInfo.scss';

const PriceInfo = ({ price }) => {
  return (
    <div className="priceInfo">
      <div className="details">
        <div className="detail">
          <p className="payBar">총 포인트</p>
          <span className="point">170,000원</span>
        </div>
      </div>

      <div className="details">
        <div className="detail">
          <p className="payBar">상품가격</p>
          <span className="deliveryFee">12,002원</span>
        </div>
      </div>

      <div className="details">
        <div className="detail">
          <p className="payBar">배송비</p>
          <span className="deliveryFee">2,000원</span>
        </div>
      </div>
      <div className="details">
        <div className="detail">
          <p className="payBar">잔여 포인트</p>
          <span>170,000원</span>
        </div>
      </div>

      <button className="linkBtnStyle">결제하기</button>
    </div>
  );
};

export default PriceInfo;
