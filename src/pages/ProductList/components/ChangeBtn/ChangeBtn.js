import React from 'react';
import { GrFormNext } from 'react-icons/gr';
import { GrFormPrevious } from 'react-icons/gr';
import './ChangeBtn.scss';

const ChangeBtn = () => {
  return (
    <div className="changeBtn">
      <GrFormPrevious className="formPrevious" />
      <p className="pageNumber">1</p>
      <GrFormNext className="formNext" />
    </div>
  );
};

export default ChangeBtn;
