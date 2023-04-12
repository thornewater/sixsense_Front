import React from 'react';
import './BrandSection.scss';

export const BrandSection = () => {
  return (
    <section className="brandSection">
      <div className="brandBanner">
        <div className="bannerCheck">
          <div className="checkBox">
            <img
              className="checkImg"
              src="/images/insense_1.jpeg"
              alt="이달의 체크"
            />
            <p className="checkText">오늘의 기분</p>
          </div>
        </div>
        <div className="bannerStory">
          <div className="storyBox">
            <img
              className="storyImg"
              src="/images/insense_4.jpeg"
              alt="우리의 이야기"
            />
            <p className="storyText">우리의 이야기</p>
          </div>
        </div>
      </div>
    </section>
  );
};
