import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GoodList.scss';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Heart } from './Heart';
import { BsArrowDown } from 'react-icons/bs';

const GoodList = ({ searchParams, goodList, setGoodList, goToCart }) => {
  const navigate = useNavigate();

  const productIdArr = [];
  return (
    <div className="goodList">
      {goodList &&
        goodList.map(
          (
            {
              productId,
              productImage,
              productName,
              productPrice,
              productDiscountRate,
            },
            i
          ) => {
            productIdArr.push(productId);
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
                    onClick={() => goToCart?.(productIdArr[i])}
                  />
                </div>
                <p className="item">
                  {productName}
                  <span className="heartCount">
                    <Heart />
                  </span>
                </p>

                <div className="discountWrap">
                  {productDiscountRate === 0.0 ? (
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
