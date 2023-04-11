import React from 'react';
import OrderInfo from './orderInfo/OrderInfo';
import AddressInfo from './addressInfo/AddressInfo';
import './Payment.scss';
import PriceInfo from '../Gift/components/priceInfo/PriceInfo';

const Payment = () => {
  return (
    <div className="payment">
      <div className="paymentTitle">결제하기</div>

      <div className="bodyWrap">
        <div className="formPayment">
          <div className="info">
            <OrderInfo />
            <AddressInfo />
          </div>
        </div>
        <div>
          <PriceInfo />
        </div>
      </div>
    </div>
  );
};

export default Payment;
