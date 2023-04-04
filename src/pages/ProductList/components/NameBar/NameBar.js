import React from 'react';
import './NameBar.scss';

const NameBar = () => {
  return (
    <div className="nameBar">
      <div>
        <span>All product</span>
      </div>
      <div className="sortBar">
        <p className="sort">high price</p>
        <p className="sort">low price</p>
      </div>
    </div>
  );
};

export default NameBar;
