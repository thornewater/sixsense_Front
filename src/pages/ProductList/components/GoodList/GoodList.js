import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './GoodList.scss';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Heart } from './Heart';
import { BsArrowDown } from 'react-icons/bs';

const GoodList = ({ limit, offset, searchParams }) => {
  const [goodList, setGoodList] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    fetch(`http://10.58.52.91:3000/products/${location.search}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => setGoodList(data));
  }, [offset, limit]);

  return (
    <div className="goodList">
      {goodList &&
        goodList.map(
          ({
            productId,
            productImage,
            productName,
            productPrice,
            productDiscountRate,
          }) => {
            return (
              <div key={productId} className="goodListItem">
                <div className="images">
                  <img
                    className="rendingImage"
                    src={productImage[0]}
                    alt="rendingImage"
                    onClick={() => {
                      navigate(`/productDetail/${productId}`);
                    }}
                  />
                  <img
                    className="hoverImage"
                    src={productImage[1]}
                    alt="hoverImage"
                    onClick={() => {
                      navigate(`/productDetail/${productId}`);
                    }}
                  />
                  <AiOutlineShoppingCart
                    className="hoverCart"
                    onClick={() => {
                      navigate('/cart');
                    }}
                  />
                </div>
                <p className="item">
                  {productName}
                  <span className="heartCount">
                    <Heart />
                    <span className="count">1</span>
                  </span>
                </p>

                <div>
                  {productDiscountRate === 0 ? (
                    <p className="normalPrice">
                      {Math.floor(productPrice).toLocaleString()} WON
                    </p>
                  ) : (
                    <p>
                      <p className="price">
                        {Math.floor(productPrice).toLocaleString()} WON
                      </p>
                      <p className="discount">
                        <span className="discountPrice">
                          {Number(productPrice) * Number(productDiscountRate)}
                          WON
                        </span>

                        <span className="discountRate">
                          {`(${Math.floor(
                            (1 - Number(productDiscountRate)) * 100
                          )}%`}
                          <BsArrowDown />
                          <span>)</span>
                        </span>
                      </p>
                    </p>
                  )}
                </div>
              </div>
            );
          }
        )}
    </div>
  );
};

export default GoodList;
