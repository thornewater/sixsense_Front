import React, { useState } from 'react';
import './PayInfo.scss';

const PayInfo = ({ cartList, postPayInfo }) => {
  const price = 100000;
  // const goodsPrice = 30400;

  const deliveryCondition = () => {
    if (paymentTotalPrice > 30000) {
      return 2000;
    } else {
      return 0;
    }
  };

  const receipt = () => {
    cartList.map(item => {
      const payObj = [];
      payObj.push(
        { cartId: item.cartId },
        { productId: item.productId },
        { qunantity: item.productQuantity }
      );
      return payObj;
    });
  };

  console.log(receipt);

  const paymentTotalPrice = () => {
    const paymentPrice = 0;
    cartList.map(item => {
      paymentPrice += item.productPrice;
    });
    return paymentPrice;
  };
  const [disable, setDisable] = useState(false);

  const possiblePay = () => {
    price > paymentTotalPrice + deliveryCondition(paymentTotalPrice)
      ? setDisable(!disable)
      : setDisable(disable);
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
          <span className="deliveryFee">
            {deliveryCondition(paymentTotalPrice)}
          </span>
        </div>
      </div>
      <div className="details">
        <div className="detail">
          <p className="payBar">잔여 포인트</p>
          <span>
            {price - paymentTotalPrice - deliveryCondition(paymentTotalPrice)}
          </span>
        </div>
      </div>

      <button
        className="linkBtnStyle"
        onClick={() => postPayInfo(receipt, paymentTotalPrice)}
        disabled={false}
      >
        결제하기
      </button>
    </div>
  );
};

export default PayInfo;
