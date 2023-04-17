import React from 'react';
import './DetailHeader.scss';

const DetailHeader = ({ name, description, goodsId }) => {
  return (
    <div className="detailHeader" key={goodsId}>
      <h3 className="goods"> {name}</h3>
      <p>{description}</p>
    </div>
  );
};
export default DetailHeader;
