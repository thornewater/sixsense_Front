import React, { useEffect, useState } from 'react';
import DetailCount from './DetailCount';
import DetailHeader from './DetailHeader';
import Navigate from './Navigate';
import TotalCost from './TotalCost';

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

  // useEffect(() => {
  //   fetch(`data/good.json/${goodsId}`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(result => setProductPrice(result));
  // }, [goodsId]);

  return (
    <div className="detail">
      <DetailHeader
        id={id}
        price={price}
        description={description}
        name={name}
      />
      <p className="price">{price}</p>
      <DetailCount count={count} decrease={decrease} increase={increase} />
      <TotalCost price={price} count={count} />
      <Navigate />
    </div>
  );
};

export default Detail;
