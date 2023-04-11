import React, { useState } from 'react';
import './OrderInfo.scss';
import { BsChevronUp } from 'react-icons/bs';
import { BsChevronDown } from 'react-icons/bs';

const OrderInfo = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="orderInfo">
      <div className="bothSide">
        <div className="senderInfo">
          <p className="subject">보내는 분</p>

          <div className="right">
            <p>조건호</p>
            <p>01041958350</p>
            {show ? (
              <BsChevronUp onClick={() => setShow(!show)} />
            ) : (
              <BsChevronDown onClick={() => setShow(!show)} />
            )}
          </div>
        </div>
        {show ? (
          <div className="userInfo">
            <div className="name">
              <p className="text">이름</p>
              <input className="text input" type="text" placeholder="이름" />
            </div>

            <div className="phone">
              <p className="number">휴대번호</p>
              <input
                name="senderNumber"
                className="number input"
                type="text"
                placeholder="  '-' 없이 휴대폰번호 입력 "
              />
            </div>
          </div>
        ) : null}
      </div>
      <div className="bothSide">
        <p className="subject">받는 분 정보</p>
      </div>
      <div className="userInfo">
        <div className="name">
          <p className="text">받는 분</p>
          <input
            name="RecipientName"
            className="text input"
            type="text"
            placeholder="이름"
          />
        </div>

        <div className="phone">
          <p className="number">연락처</p>
          <input
            name="RecipientNumber"
            className="number input"
            type="text"
            placeholder="  '-' 없이 휴대폰번호 입력 "
          />
        </div>
      </div>
      <div className="goodsInfo">
        <p className="giftSign">선물상품 확인</p>
        <p className="generalGift"> 일반 상품</p>
        <div className="goodsTotal">
          <div className="leftGoodsDetail">
            <img className="goodsImg" alt="goodsImg" />
            <span>세작 20매</span>
          </div>

          <div>
            <div className="rightGoodsDetail">
              <span>28,000원</span>
              <span>/ 1개</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderInfo;
