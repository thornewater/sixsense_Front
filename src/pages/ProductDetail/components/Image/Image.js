import React from 'react';
import { GoStar } from 'react-icons/go';
import './Image.scss';

const Image = () => {
  return (
    <div className="image">
      <img className="incense" src="/images/incense.jpeg" alt="detailpage" />
      <div className="review">
        <span>별점</span>
        <div>
          <GoStar className="star" />
          <GoStar className="star" />
          <GoStar className="star" />
          <GoStar className="star" />
          <GoStar className="star" />
        </div>
      </div>
    </div>
  );
};

export default Image;
