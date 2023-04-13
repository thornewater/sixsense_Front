import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './NameBar.scss';

const NameBar = ({ isSorted, setIsSorted }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // const [isSorted, setIsSorted] = useState(true);
  const handleSortClick = sortOrder => {
    setIsSorted(!isSorted);
    if (isSorted) {
      searchParams.set('sort', 'priceInASC');
    } else {
      searchParams.set('sort', 'priceInDESC');
    }
    setSearchParams(searchParams);
  };
  return (
    <div className="nameBar">
      <div>
        <span>All product</span>
      </div>
      <div className="priceSort">
        <p className="higher sort" onClick={() => handleSortClick('asc')}>
          high price
        </p>
        <p className="lower sort" onClick={() => handleSortClick('dec')}>
          low price
        </p>
      </div>
    </div>
  );
};

export default NameBar;
