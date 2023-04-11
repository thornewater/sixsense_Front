import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PriceInfo.scss';

export const PriceInfo = ({ lists, checkedItems }) => {
  let userPoint = 170000;
  const [totalPrice, setTotalPrice] = useState(0);
  const totalPriceCalc = () => {
    let totalPrice = 0;
    lists.forEach(product => {
      const checkedItemId = checkedItems.findIndex(id => id === product.id);
      if (checkedItemId > -1) {
        if (product.discount_rate > 0) {
          const discountPrice =
            product.price - product.price * product.discount_rate;
          return (totalPrice += discountPrice * product.quantity);
        } else {
          return (totalPrice += product.price * product.quantity);
        }
      } else {
        return;
      }
    });
    setTotalPrice(totalPrice);
  };

  useEffect(() => {
    totalPriceCalc();
  }, [checkedItems, lists]);

  const leftPoint = () => {
    return userPoint - totalPrice - deliveryFeeCalc();
  };

  const deliveryFeeCalc = () => {
    if (totalPrice > 20000) {
      return 0;
    } else {
      return 2000;
    }
  };

  return (
    <div className="priceInfo">
      <div className="details">
        <div className="detail">
          <p>총 포인트</p> <span>{userPoint}</span>
        </div>
      </div>
      <div className="details">
        <div className="detail">
          <p>상품가격</p>
          <span className="deliveryFee">{totalPrice}</span>
        </div>
      </div>
      <div className="details">
        <div className="detail">
          <p>배송비</p> <span className="deliveryFee">{deliveryFeeCalc()}</span>
        </div>
      </div>
      <div className="details">
        <div className="detail">
          <p>잔여 포인트</p> <span>{leftPoint()}</span>
        </div>
      </div>
      <button>
        <Link to="/Payment" className="linkBtnStyle">
          결재하기
        </Link>
      </button>
    </div>
  );
};
