import React, { useState } from 'react';
import DetailCount from './DetailCount';
import DetailHeader from './DetailHeader';
import Navigate from './Navigate';
import TotalCost from './TotalCost';
import { BsArrowDown } from 'react-icons/bs';

import './Detail.scss';

const Detail = ({
  id,
  price,
  description,
  discountRate,
  name,
  goodsId,
  setProductPrice,
}) => {
  const [count, setCount] = useState(1);

  const decrease = () => {
    if (count > 1) {
      setCount(prev => prev - 1);
    }
  };

  const increase = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div className="detail">
      <DetailHeader
        id={id}
        price={price}
        description={description}
        name={name}
      />
      <div>
        {discountRate === 0 ? (
          <p className="normalPrice">
            {Math.floor(price).toLocaleString()} WON
          </p>
        ) : (
          <div>
            {discountRate == 0.0 ? (
              <p className="price">{Math.floor(price).toLocaleString()} WON</p>
            ) : (
              <div>
                <p className="price">
                  {Math.floor(price).toLocaleString()} WON
                </p>
                <p className="discount">
                  <span className="discountPrice">
                    {(
                      Number(price) * Number(1 - discountRate)
                    ).toLocaleString()}
                    WON
                  </span>

                  <span className="discountRate">
                    {`${Math.floor(discountRate * 100)}%`}
                    <BsArrowDown />
                  </span>
                </p>
              </div>
            )}
          </div>
        )}
      </div>
      <DetailCount count={count} decrease={decrease} increase={increase} />
      <TotalCost price={price} count={count} />
      <Navigate
        price={price}
        count={count}
        id={id}
        setProductPrice={setProductPrice}
      />
    </div>
  );
};

export default Detail;
