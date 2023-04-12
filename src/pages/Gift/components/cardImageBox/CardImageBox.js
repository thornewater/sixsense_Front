import React, { useState } from 'react';
import './CardImageBox.scss';

const CardImageBox = () => {
  const [textValue, setTextValue] = useState(0);

  const onInputHandler = e => {
    setTextValue(e.target.value.length);
  };

  console.log(textValue);
  return (
    <div className="cardImageBox">
      <div className="cardImage">
        <img src="images/backgroundImage.jpeg" alt="backgroundImage" />
      </div>
      <div className="cardMessage">
        <textarea
          className="messageContents"
          placeholder="100자 이내로 입력해 주세요"
          onChange={onInputHandler}
          maxLength="10"
        />
        <p>
          <span>{textValue}</span>
          <span>/ 100자</span>
        </p>
      </div>
      <div />
      <div />
    </div>
  );
};

export default CardImageBox;
