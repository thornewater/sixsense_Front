import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import OrderInfo from './orderInfo/OrderInfo';
import PayInfo from './PayInfo/PayInfo';
import { api } from '../../api';
import './Payment.scss';

const Payment = () => {
  const location = useLocation();
  // const [cartList, setCartList] = useState(location.state);
  const cartList = location.state;

  console.log(cartList);

  const [completeAll, setCompleteAll] = useState({});

  const postPayInfo = (receipt, price) => {
    fetch(`${api.order}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        totalPrice: price,
        carts: receipt,
      }),
      credentials: 'include',
    })
      .then(res => res.json())
      .then(data => setCompleteAll(data), alert('완료되었습니다.'));
  };

  return (
    <div className="payment">
      <div className="paymentTitle">결제하기</div>

      <div className="bodyWrap">
        <div className="formPayment">
          <div className="info">
            <OrderInfo cartList={cartList} />
          </div>
        </div>
        <div>
          <PayInfo cartList={cartList} postPayInfo={postPayInfo} />
        </div>
      </div>
    </div>
  );
};

export default Payment;
