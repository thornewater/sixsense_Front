import React, { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';

export const Heart = () => {
  const [isLiked, setIsLiked] = useState(false);
  const switchLikes = () => {
    setIsLiked(prev => !prev);
  };
  return (
    <div>
      {isLiked ? (
        <AiFillHeart onClick={switchLikes} className="heart" />
      ) : (
        <AiOutlineHeart onClick={switchLikes} className="heart" />
      )}
    </div>
  );
};
