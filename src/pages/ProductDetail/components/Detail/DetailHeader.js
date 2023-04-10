import React from 'react';
import './DetailHeader.scss';

const DetailHeader = ({ name, description, price, id }) => {
  return (
    <div className="detailHeader">
      <h3 className="goods"> {name}</h3>
      <p>{description}</p>
    </div>
  );
};
export default DetailHeader;
