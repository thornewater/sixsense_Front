import React, { useEffect, useState } from 'react';
import './ProductDetail.scss';
import Image from './components/Image/Image';
import Detail from './components/Detail/Detail';
import { useParams } from 'react-router-dom';
import { detailParams } from '../../api';

const ProductDetail = () => {
  const params = useParams();
  const goodsId = params.id;
  const [productPrice, setProductPrice] = useState({});
  const { id, price, description, discountRate, name, productImage } =
    productPrice;

  useEffect(() => {
    fetch(`http://10.58.52.91:3000/products/${goodsId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(result => setProductPrice(result));
  }, [goodsId]);
  return (
    <div className="productDetail">
      <div className="wrap">
        <Image
          productImage={productImage}
          setProductPrice={setProductPrice}
          id={id}
          goodsId={goodsId}
        />
        <Detail
          id={params.id}
          price={price}
          discountRate={discountRate}
          name={name}
          description={description}
          goodsId={goodsId}
          setProductPrice={setProductPrice}
        />
      </div>
    </div>
  );
};

export default ProductDetail;
