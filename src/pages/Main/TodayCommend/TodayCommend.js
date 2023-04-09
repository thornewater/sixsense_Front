import React, { useState, useEffect } from 'react';
import './TodayCommend.scss';
import todayBg from '../../assets/images/insense_6.JPG';

export const TodayCommend = () => {
  const currentTime = new Date();
  const timeout = false;
  const [leftHour, setLeftHour] = useState(24 - currentTime.getHours());
  const [leftMinute, setLeftMinute] = useState(60 - currentTime.getMinutes());
  const [leftSecond, setLeftSecond] = useState(60 - currentTime.getSeconds());

  useEffect(() => {
    const leftTime = setInterval(() => {
      setLeftSecond(leftSecond => {
        if (leftSecond === 0) {
          setLeftMinute(leftMinute => {
            if (leftMinute === 0) {
              setLeftHour(leftHour => leftHour - 1);
              setLeftMinute(59);
            }
            return leftMinute - 1;
          });
          setLeftSecond(59);
        }
        return leftSecond - 1;
      });
    }, 1000);
    return () => clearInterval(leftTime);
  }, [timeout]);
  return (
    <section className="todayRecommend">
      <div className="todayBg" style={{ backgroundImage: `url(${todayBg})` }} />
      <div className="todayTextArea">
        <div className="todayTimeText">
          <h3 className="h3Style">오늘의 기억</h3>
          <p className="timeText">
            {leftHour < 10 ? `0${leftHour}` : leftHour}:
            {leftMinute < 10 ? `0${leftMinute}` : leftMinute}:
            {leftSecond < 10 ? `0${leftSecond}` : leftSecond}
          </p>
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
