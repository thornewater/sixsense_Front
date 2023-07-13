import React, { useEffect, useState } from 'react';
import { api } from '../../api';
import './ProductDetail.scss';
import Image from './components/Image/Image';
import Detail from './components/Detail/Detail';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const params = useParams();
  const goodsId = Number(params.id);
  const [productPrice, setProductPrice] = useState({});
  const {
    productId: id,
    productName: name,
    productDescription: description,
    productPrice: price,
    discountRate,
    productImages,
  } = productPrice;

  useEffect(() => {
    fetch(`${api.products}/${goodsId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(result => setProductPrice(result.response));
  }, [goodsId]);
  return (
    <div className="productDetail">
      <div className="wrap">
        {id && (
          <div className="both">
            <Image
              productImage={productImages}
              setProductPrice={setProductPrice}
              id={id}
              goodsId={goodsId}
            />
            <Detail
              price={price}
              discountRate={discountRate}
              name={name}
              description={description}
              goodsId={goodsId}
              setProductPrice={setProductPrice}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
