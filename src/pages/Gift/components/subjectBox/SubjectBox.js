import React from 'react';
import './subjectBox.scss';
import { BsChevronUp } from 'react-icons/bs';
import { BsChevronDown } from 'react-icons/bs';

const SubjectBox = () => {
  return (
    <div className="subjectBox">
      <div className="bothSide">
        <p className="subject">보내는 분</p>

        <div className="right">
          <p>조건호</p>
          <p>01041958350</p>
          <BsChevronDown />
        </div>
      </div>
      <div className="userInfo">
        <div className="name">
          <p className="text">이름</p>
          <input className="text input" type="text" placeholder="이름" />
        </div>

        <div className="phone">
          <p className="number">휴대번호</p>
          <input
            className="number input"
            type="text"
            placeholder="  '-' 없이 휴대폰번호 입력 "
          />
        </div>
      </div>
      <div className="bothSide">
        <p className="subject">받는 분 정보</p>
      </div>
      <div className="userInfo">
        <div className="name">
          <p className="text">받는 분</p>
          <input className="text input" type="text" placeholder="이름" />
        </div>

        <div className="phone">
          <p className="number">연락처</p>
          <input
            className="number input"
            type="text"
            placeholder="  '-' 없이 휴대폰번호 입력 "
          />
        </div>
      </div>
    </div>
  );
};

export default SubjectBox;
