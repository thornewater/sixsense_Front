import React from 'react';
import './TodayCommend.scss';
import todayBg from '../../assets/images/insense_6.JPG';

export const TodayCommend = () => {
  return (
    <section className="todayRecommend">
      <div className="todayBg" style={{ backgroundImage: `url(${todayBg})` }} />
      <div className="todayTextArea">
        <div className="todayTimeText">
          <h3 className="h3Style">오늘의 기억</h3>
          <p className="timeText">01:54:55</p>
        </div>
        <h4 className="h4Style">베스트 인센스 컬렉션</h4>
        <div className="todayPriceText">
          <div className="priceText">24000원</div>
          <div className="discountText">21600원</div>
        </div>
      </div>
    </section>
  );
};
