import React from 'react';
import './ChangeBtn.scss';

const ChangeBtn = ({ setSearchParams, offset, searchParams }) => {
  const movePage = pageNumber => {
    searchParams.set('offset', (pageNumber - 1) * 3);
    setSearchParams(searchParams);
  };
  return (
    <div className="changeBtn">
      {PAGE_BTN.map(page => {
        return (
          <button
            className="pageNumber"
            key={page.id}
            onClick={() => {
              movePage(page.id);
            }}
          >
            {page.title}
          </button>
        );
      })}
    </div>
  );
};

export default ChangeBtn;

const PAGE_BTN = [
  { id: 1, title: 1 },
  { id: 2, title: 2 },
  { id: 3, title: 3 },
  { id: 4, title: 4 },
  { id: 5, title: 5 },
  { id: 6, title: 6 },
];
