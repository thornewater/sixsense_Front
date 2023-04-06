import React from 'react';
import './CardImageBox.scss';

const CardImageBox = () => {
  return (
    <div className="cardImageBox">
      <div className="cardImage">
        <img src="https://image.osulloc.com/kr/ko/static_cdj/images/present/gifts_card01.png" />
      </div>
      <div className="cardMessage">
        <textarea
          className="messageContents"
          placeholder="100자 이내로 입력해 주세요"
        />
      </div>
      <div />
      <div />
    </div>
  );
};

export default CardImageBox;
