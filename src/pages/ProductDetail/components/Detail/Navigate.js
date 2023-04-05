import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navigate.scss';

const Navigate = () => {
  const navigate = useNavigate();

  return (
    <div className="navigate">
      <form className="btns">
        <button
          className="gift btn"
          onClick={() => {
            navigate('/gift');
          }}
        >
          선물
        </button>
        <button
          className="cart btn"
          onClick={() => {
            navigate('/cart');
          }}
        >
          장바구니
        </button>

        <button
          className="cash btn"
          onClick={() => {
            navigate('/payment');
          }}
        >
          결제하기
        </button>
      </form>
    </div>
  );
};

export default Navigate;
