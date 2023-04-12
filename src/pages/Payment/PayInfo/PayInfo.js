import React from 'react';
import './PayInfo.scss';

const AddressInfo = ({ cartList }) => {
  const price = 100000;
  const goodsPrice = 30400;

  const deliveryCondition = () => {
    if (paymentTotalPrice > 30000) {
      return 2000;
    } else {
      return 0;
    }
  };

  const paymentTotalPrice = () => {
    const paymentPrice = 0;
    cartList.map(item => {
      paymentPrice += item.productPrice;
    });
    return paymentPrice;
  };

  return (
    <div className="priceInfo">
      <div className="details">
        <div className="detail">
          <p className="payBar">총 포인트</p>
          <span className="point">{price}</span>
        </div>
      </div>

      <div className="details">
        <div className="detail">
          <p className="payBar">상품가격</p>
          <span className="deliveryFee">{paymentTotalPrice}</span>
        </div>
      </div>

      <div className="details">
        <div className="detail">
          <p className="payBar">배송비</p>
          <span className="deliveryFee">{deliveryCondition(goodsPrice)}</span>
        </div>
      </div>
      <div className="details">
        <div className="detail">
          <p className="payBar">잔여 포인트</p>
          <span>{price - goodsPrice - deliveryCondition(goodsPrice)}</span>
        </div>
      </div>

      <button className="linkBtnStyle">결제하기</button>
    </div>
  );
};

export default AddressInfo;
