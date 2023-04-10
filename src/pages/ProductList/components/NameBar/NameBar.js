import React from 'react';
import './NameBar.scss';

const NameBar = () => {
  return (
    <div className="nameBar">
      <div>
        <span>All product</span>
      </div>
      <div className="priceSort">
        <p className="higher sort">high price</p>
        <p className="lower sort">low price</p>
      </div>
    </div>
  );
};

export default NameBar;
