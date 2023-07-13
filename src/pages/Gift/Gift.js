import React, { useEffect, useState } from 'react';
import PriceInfo from './components/priceInfo/PriceInfo';
import './Gift.scss';
import CardImageBox from './components/cardImageBox/CardImageBox';
import SubjectBox from './components/subjectBox/SubjectBox';
import Agree from './components/agree/Agree';
import { useParams } from 'react-router-dom';
import { api } from '../../api';
const Gift = () => {
  const params = useParams();
  const giftId = Number(params.id);

  const [giftProduct, setGiftProduct] = useState({});

  useEffect(() => {
    fetch(`${api.products}/${giftId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(result => setGiftProduct(result));
  }, [giftId]);

  const { id, name, price, detailImage, discountRate } = giftProduct;

  return (
    <div className="gift">
      <div className="pageTitle"> 선물하기</div>

      <div className="formOrder">
        <div className="formWrap">
          <div className="headerBox">
            <CardImageBox />
          </div>
          <SubjectBox
            id={id}
            name={name}
            price={price}
            detailImage={detailImage}
            discountRate={discountRate}
          />
          <Agree />
        </div>

        <div>
          <PriceInfo price={price} />
        </div>
      </div>
    </div>
  );
};

export default Gift;
