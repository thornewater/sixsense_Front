import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import OrderInfo from './orderInfo/OrderInfo';
import PayInfo from './PayInfo/PayInfo';
import './Payment.scss';

const Payment = () => {
  const location = useLocation();
  // const [cartList, setCartList] = useState(location.state);
  const cartList = location.state;
  console.log(cartList);

  useEffect(() => {
    const cartList = location.state;
  }, []);

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
          <PayInfo cartList={cartList} />
        </div>
      </div>
    </div>
  );
};

export default Payment;
