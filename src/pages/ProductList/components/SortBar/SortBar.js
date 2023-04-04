import React from 'react';
import './SortBar.scss';

const SortBar = () => {
  return (
    <div className="sortBar">
      <p>총 5개 상품이 있습니다</p>
      <ul>
        <li>total</li>
        <li>gift</li>
        <li>stick</li>
        <li>cons</li>
        <li>holder</li>
      </ul>
    </div>
  );
};

export default SortBar;
