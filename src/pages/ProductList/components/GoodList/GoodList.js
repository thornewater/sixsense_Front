import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './GoodList.scss';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Heart } from './Heart';
import { BsArrowDown } from 'react-icons/bs';
import { showTotalList } from '../../../../api';

const GoodList = ({ limit, offset, searchParams, goodList, setGoodList }) => {
  // const [goodList, setGoodList] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  console.log('location ', location.search);
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
                  </span>
                </p>

                <div className="discountWrap">
                  {productDiscountRate == 0.0 ? (
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
                          {(
                            productPrice *
                            (1 - productDiscountRate)
                          ).toLocaleString()}
                          WON
                        </span>

                        <span className="discountRate">
                          {`(${Math.floor(productDiscountRate * 100)}%`}
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
