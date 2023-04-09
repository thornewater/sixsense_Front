import React from 'react';
import { GoStar } from 'react-icons/go';
import './Image.scss';

const Image = () => {
  return (
    <div className="image">
      <img className="incense" src="/images/incense.png" alt="detailpage" />
      <div className="review">
        <span className="starDots">리뷰 별점 :</span>
        <span className="reviewNum">4.7</span>

        <div className="stars">
          {STAR_REVIEW.map(star => {
            return (
              <div className="star" key={star.id}>
                {star.star}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Image;

const STAR_REVIEW = [
  { id: 1, star: <GoStar /> },
  { id: 2, star: <GoStar /> },
  { id: 3, star: <GoStar /> },
  { id: 4, star: <GoStar /> },
  { id: 5, star: <GoStar /> },
];
