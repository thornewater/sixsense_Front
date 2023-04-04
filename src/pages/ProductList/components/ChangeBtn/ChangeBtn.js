import React from 'react';
import { MdNavigateNext } from 'react-icons/md';
import { MdNavigateBefore } from 'react-icons/md';
import './ChangeBtn.scss';

const ChangeBtn = () => {
  return (
    <div className="changeBtn">
      <MdNavigateBefore className="before" />
      <p className="pageNumber">1</p>
      <MdNavigateNext className="after" />
    </div>
  );
};

export default ChangeBtn;
