import React, { useState } from 'react';
import './ProductDetail.scss';
import Image from './components/Image/Image';
import Detail from './components/Detail/Detail';
import { useParams } from 'react-router-dom';
const ProductDetail = () => {
  const params = useParams();
  const goodsId = params.id;
  const [productPrice, setProductPrice] = useState({});
  const { id, price, description, discountRate, name, image } = productPrice;
  return (
    <div className="productDetail">
      <div className="wrap">
        <Image
          image={image}
          setProductPrice={setProductPrice}
          id={id}
          goodsId={goodsId}
        />
        <Detail
          id={id}
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
