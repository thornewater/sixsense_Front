import React, { useEffect, useState } from 'react';
import './subjectBox.scss';
import { BsChevronUp } from 'react-icons/bs';
import { BsChevronDown } from 'react-icons/bs';

const SubjectBox = ({ id, name, price, detailImage, discountRate }) => {
  const [show, setShow] = useState(false);
  const [userInfo, setUserInfo] = useState({
    senderName: '',
    senderNumber: '',
    RecipientName: '',
    RecipientNumber: '',
  });
  const { senderName, senderNumber, RecipientName, RecipientNumber } = userInfo;
  const onChange = e => {
    const { value, name } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div className="subjectBox">
      <div className="bothSide">
        <div className="senderInfo">
          <p className="subject">보내는 분</p>
          <div className="right">
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
              <input
                value={senderName}
                name="senderName"
                className="text input"
                type="text"
                placeholder="이름"
                onChange={onChange}
              />
            </div>

            <div className="phone">
              <p className="number">휴대번호</p>
              <input
                onChange={onChange}
                value={senderNumber}
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
            onChange={onChange}
            value={RecipientName}
            name="RecipientName"
            className="text input"
            type="text"
            placeholder="이름"
          />
        </div>

        <div className="phone">
          <p className="number">연락처</p>
          <input
            onChange={onChange}
            value={RecipientNumber}
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
            <img className="goodsImg" alt="goodsImg" src={detailImage} />
            <span>{name}</span>
          </div>

          <div>
            <div className="rightGoodsDetail">
              <span>{price}원</span>
              <span>/ 1개</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectBox;
