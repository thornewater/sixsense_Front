import React from 'react';
import PriceInfo from './components/priceInfo/PriceInfo';
import './Gift.scss';
import CardImageBox from './components/cardImageBox/CardImageBox';
import SubjectBox from './components/subjectBox/SubjectBox';
import Agree from './components/agree/Agree';

const Gift = () => {
  return (
    <div className="gift">
      <div className="pageTitle"> 선물하기</div>

      <div className="formOrder">
        <div className="formWrap">
          <div className="headerBox">
            <CardImageBox />
          </div>
          <SubjectBox />
          <Agree />
        </div>

        <div>
          <PriceInfo />
        </div>
      </div>
    </div>
  );
};

export default Gift;
