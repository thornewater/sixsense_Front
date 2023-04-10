import React from 'react';
import './ProductDetail.scss';
import Image from './components/Image/Image';
import Detail from './components/Detail/Detail';
const ProductDetail = () => {
  return (
    <div className="productDetail">
      <div className="wrap">
        <Image />
        <Detail />
      </div>
    </div>
  );
};

export default ProductDetail;
