import React, { useEffect, useState } from 'react';
import DetailCount from './DetailCount';
import DetailHeader from './DetailHeader';
import Navigate from './Navigate';
import TotalCost from './TotalCost';
import { useParams } from 'react-router-dom';
import './Detail.scss';

const Detail = () => {
  const [count, setCount] = useState(1);

  const decrease = () => {
    if (count > 1) {
      setCount(prev => prev - 1);
    }
  };

  const increase = () => {
    setCount(prev => prev + 1);
  };

  const params = useParams();
  const goodsId = params.id;
  console.log(goodsId);
  const [productPrice, setProductPrice] = useState({});
  const { id, price, description, discountRate, name } = productPrice;

  useEffect(() => {
    fetch(`../../../../../public/data/detail.json/${goodsId}`)
      .then(res => res.json())
      .then(result => setProductPrice(result));
  }, [goodsId]);

  // const price = 17000;
  return (
    <div className="detail">
      <DetailHeader
        id={productPrice.id}
        price={productPrice.price}
        description={productPrice.description}
        name={productPrice.name}
      />
      <p className="price">{price}</p>
      <DetailCount count={count} decrease={decrease} increase={increase} />
      <TotalCost price={price} count={count} />
      <Navigate />
    </div>
  );
};

export default Detail;
