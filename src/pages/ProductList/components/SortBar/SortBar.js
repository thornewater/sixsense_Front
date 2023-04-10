import React from 'react';
import './SortBar.scss';
import SortFilter from './SortFilter';

const SortBar = () => {
  return (
    <div className="sortBar">
      <p>총 5개 상품이 있습니다</p>
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
  { id: 1, title: 'total' },
  { id: 2, title: 'gift' },
  { id: 3, title: 'stick' },
  { id: 4, title: 'cons' },
  { id: 5, title: 'holder' },
];
