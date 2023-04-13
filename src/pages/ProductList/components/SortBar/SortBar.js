import React, { useState } from 'react';
import './SortBar.scss';
import SortFilter from './SortFilter';
import { useSearchParams } from 'react-router-dom';

const SortBar = ({ goodList, categoryFilter }) => {
  // console.log(categoryFilter(goodList));

  return (
    <div className="sortBar">
      <p>총 {goodList.length}개 상품이 있습니다</p>
      <ul>
        {LI_LIST.map(props => {
          return <SortFilter title={props.title} key={props.id} />;
        })}
      </ul>
    </div>
  );
};

export default SortBar;

const LI_LIST = [
  { id: 1, title: 'gift' },
  { id: 2, title: 'stick' },
  { id: 3, title: 'cons' },
  { id: 4, title: 'holder' },
];
