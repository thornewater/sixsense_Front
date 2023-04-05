import React, { useState, useEffect } from 'react';
import './GoodList.scss';
import { AiOutlineShoppingCart } from 'react-icons/ai';
// import { AiOutlineHeart } from 'react-icons/ai';
// import { AiFillHeart } from 'react-icons/ai';
import { Heart } from './Heart';

const GoodList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('data/good.json')
      .then(res => res.json())
      .then(result => setList(result));
  }, []);

  return (
    <div className="goodList">
      {list.map(({ id, image1, image2, title, price }) => {
        return (
          <div key={id} className="goodListItem">
            <div className="image">
              <img className="data" src={image1} alt="data" />
              <img className="in" src={image2} alt="data" />
              <AiOutlineShoppingCart className="hoverCart" />
            </div>
            <p className="item">{title}</p>
            <p className="price"> {price} WON</p>
            <div>
              <Heart />
              <span className="count">1</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GoodList;
