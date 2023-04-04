import React from 'react';
import './Detail.scss';
import DetailCount from './DetailCount';
import DetailHeader from './DetailHeader';

const Detail = () => {
  return (
    <div className="detail">
      <DetailHeader />
      <p> 17,000원</p>
      <DetailCount />
    </div>
  );
};

export default Detail;
