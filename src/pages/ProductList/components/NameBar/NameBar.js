import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './NameBar.scss';

const NameBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [isSorted, setIsSorted] = useState(true);
  const handleSortClick = sortOrder => {
    setIsSorted(!isSorted);
    if (sortOrder === 'asc') {
      if (isSorted) {
        searchParams.set('sort', 'priceAsc');
      } else {
        searchParams.set('sort', 'productId');
      }
    } else {
      if (isSorted) {
        searchParams.set('sort', 'priceDesc');
      } else {
        searchParams.set('sort', 'productId');
      }
    }
    setSearchParams(searchParams);
  };
  return (
    <div className="nameBar">
      <div>
        <span>All product</span>
      </div>
      <div className="priceSort">
        <p className="higher sort" onClick={handleSortClick}>
          high price
        </p>
        <p className="lower sort" onClick={handleSortClick}>
          low price
        </p>
      </div>
    </div>
  );
};

export default NameBar;
