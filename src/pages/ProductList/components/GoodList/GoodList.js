import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './GoodList.scss';
import { AiOutlineShoppingCart } from 'react-icons/ai';
// import { AiOutlineHeart } from 'react-icons/ai';
// import { AiFillHeart } from 'react-icons/ai';
import { Heart } from './Heart';

const GoodList = () => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

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
              <img className="rendingImage" src={image1} alt="rendingImage" />
              <img className="hoverImage" src={image2} alt="hoverImage" />
              <AiOutlineShoppingCart
                className="hoverCart"
                onClick={() => {
                  navigate('/cart');
                }}
              />
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
