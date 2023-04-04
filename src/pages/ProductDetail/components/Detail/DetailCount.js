import React from 'react';
import './DetailCount.scss';
import { GoPlus } from 'react-icons/go';
import { BiMinus } from 'react-icons/bi';
const DetailCount = () => {
  return (
    <div className="detailCount">
      <span>Quantity</span>
      <div className="count">
        <GoPlus />
        <p>1</p>
        <BiMinus />
      </div>
    </div>
  );
};

export default DetailCount;
