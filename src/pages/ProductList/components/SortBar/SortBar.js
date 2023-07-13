import React, { useState } from 'react';
import './SortBar.scss';
import SortFilter from './SortFilter';

const SortBar = ({ goodList, categoryFilter, setSearchParams }) => {
  const [selectedIds, setSelectedIds] = useState([]);

  const handleClick = id => {
    setSelectedIds(prevIds => {
      const newIds = prevIds.includes(id)
        ? prevIds.filter(prevId => prevId !== id)
        : [...prevIds, id];

      setSearchParams(prevParams => {
        const newParams = new URLSearchParams(prevParams);
        newParams.set('categoryId', newIds.join());
        return newParams;
      });

      return newIds;
    });
  };

  return (
    <div className="sortBar">
      <p>총 {goodList.length}개 상품이 있습니다</p>
      <ul>
        {LI_LIST.map(props => {
          return (
            <SortFilter
              title={props.title}
              key={props.id}
              onClick={() => handleClick(props.id)}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default SortBar;

const LI_LIST = [
  { id: 4, title: 'gift' },
  { id: 1, title: 'stick' },
  { id: 2, title: 'cons' },
  { id: 3, title: 'holder' },
];
