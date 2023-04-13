import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PriceInfo.scss';

// const USER_POINT = 100000;
export const PriceInfo = ({ lists, checkedItems }) => {
  const point = Math.floor(lists[0]?.userPoint);

  const [totalPrice, setTotalPrice] = useState(0);
  const totalPriceCalc = () => {
    let totalPrice = lists.reduce((acc, product) => {
      const checkedItemId = checkedItems.findIndex(
        checkedItem => checkedItem.productId === product.productId
      );
      if (checkedItemId > -1) {
        if (product.productDiscountRate > 0) {
          const discountPrice =
            product.productPrice -
            product.productPrice * product.productDiscountRate;
          return acc + discountPrice * product.productQuantity;
        } else {
          return acc + product.productPrice * product.productQuantity;
        }
      } else {
        return acc;
      }
    }, 0);
    setTotalPrice(totalPrice);
  };

  useEffect(() => {
    totalPriceCalc();
  }, [checkedItems, lists]);

  const deliveryCost = totalPrice > 20000 ? 0 : 2000;
  const leftPoint = point - totalPrice - deliveryCost;

  return (
    <div className="priceInfo">
      <div className="details">
        <div className="detail">
          <p>총 포인트</p> <span>{point}</span>
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
          <p>배송비</p> <span className="deliveryFee">{deliveryCost}</span>
        </div>
      </div>
      <div className="details">
        <div className="detail">
          <p>잔여 포인트</p> <span>{leftPoint}</span>
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
