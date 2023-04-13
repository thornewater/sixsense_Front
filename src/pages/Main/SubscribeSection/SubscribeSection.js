import React from 'react';
import './SubscribeSection.scss';

export const SubscribeSection = () => {
  return (
    <section className="subscribeSection">
      <div className="subscribeBanner">
        <h4 className="subscribeTitle">깊어지는 나날</h4>
        <p className="subscribeSubText">
          여러가지 인센스 들로 더욱 평안해지는 휴식 시간을 가져보세요.
        </p>
        <div className="subscribeFlexBox">
          <div className="insenseLife" />
          {/* <img
            className="insenseLife"
            src="/images/incense_gif.gif"
            alt="인센스 움짤"
          /> */}
          <div className="subscribeContainer">
            <div className="insenseMood" />
            <div className="insensePost" />
          </div>
        </div>
      </div>
    </section>
  );
};
