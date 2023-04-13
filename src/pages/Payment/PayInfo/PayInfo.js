import React, { useState } from 'react';
import './PayInfo.scss';

const PayInfo = ({ cartList, postPayInfo }) => {
  const price = 100000;

  const deliveryCondition = paymentTotalPrice => {
    if (paymentTotalPrice > 30000) {
      return 2000;
    } else {
      return 0;
    }
  };

  const receipt = cartList => {
    let payObj = [];
    cartList.map(item => {
      payObj.push({
        cartId: item.cartId,
        productId: item.productId,
        quantity: item.productQuantity,
      });
    });
    return payObj;
  };
  console.log(receipt(cartList));

  const paymentTotalPrice = cartList => {
    let paymentPrice = 0;
    cartList.map(item => {
      paymentPrice += Number(item.discountedPrice) * item.productQuantity;
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
          <span className="deliveryFee">{paymentTotalPrice(cartList)}</span>
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
            {price -
              paymentTotalPrice(cartList) -
              deliveryCondition(paymentTotalPrice)}
          </span>
        </div>
      </div>

      <button
        className="linkBtnStyle"
        onClick={() =>
          postPayInfo(receipt(cartList), paymentTotalPrice(cartList))
        }
        disabled={false}
      >
        결제하기
      </button>
    </div>
  );
};

export default PayInfo;
