import React, { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';

export const Heart = () => {
  const [liked, setLiked] = useState(false);
  return (
    <div>
      {liked ? (
        <AiFillHeart
          onClick={() => setLiked(!liked)}
          className="heart"
          liked={liked}
          setLiked={setLiked}
        />
      ) : (
        <AiOutlineHeart
          onClick={() => setLiked(!liked)}
          className="heart"
          liked={liked}
          setLiked={setLiked}
        />
      )}
    </div>
  );
};
