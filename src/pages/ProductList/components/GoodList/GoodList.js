import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './GoodList.scss';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Heart } from './Heart';

const GoodList = () => {
  const [goodList, setGoodList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://10.58.52.92:3000/products/productlist', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => setGoodList(data));
  }, []);

  return (
    <div className="goodList">
      {goodList &&
        goodList.map(
          ({
            productId,
            productImage,
            // hoverImage,
            productName,
            productPrice,
          }) => {
            return (
              <div key={productId} className="goodListItem">
                <div className="image">
                  <img
                    className="rendingImage"
                    src={productImage[0]}
                    alt="rendingImage"
                  />
                  <img
                    className="hoverImage"
                    src={productImage[1]}
                    alt="hoverImage"
                  />
                  <AiOutlineShoppingCart
                    className="hoverCart"
                    onClick={() => {
                      navigate('/cart');
                    }}
                  />
                </div>
                <p className="item">{productName}</p>
                <p className="price"> {productPrice} WON</p>
                <div className="heartCount">
                  <Heart />
                  <span className="count">1</span>
                </div>
              </div>
            );
          }
        )}
    </div>
  );
};

export default GoodList;
