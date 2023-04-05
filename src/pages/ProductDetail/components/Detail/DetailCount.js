import React from 'react';
import './DetailCount.scss';
import { GoPlus } from 'react-icons/go';
import { BiMinus } from 'react-icons/bi';

const DetailCount = ({ increase, decrease, count }) => {
  return (
    <div className="detailCount">
      <span>Quantity</span>
      <div className="count">
        <BiMinus onClick={decrease} className="minus" />
        <p className="num">{count}</p>
        <GoPlus onClick={increase} className="plus" />
      </div>
    </div>
  );
};

export default DetailCount;
