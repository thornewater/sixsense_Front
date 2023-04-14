import React, { useState } from 'react';
import './MagazineSection.scss';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

export const MagazineSection = () => {
  const [index, setIndex] = useState(0);
  const swipeMagazine = 70;

  const addIndex = () => {
    index >= MAGAZINE_DATA.length - 1 ? setIndex(0) : setIndex(index + 1);
  };

  const subIndex = () => {
    index <= 0 ? setIndex(MAGAZINE_DATA.length - 1) : setIndex(index - 1);
  };

  const translateBanner = index => {
    return index * swipeMagazine;
  };
  return (
    <section className="magazineSection">
      <div className="magazineBanner">
        <h3 className="magazineTitle">순간들의 무드</h3>
        <p className="magazineSubText">향을 통해 달라지는 휴식을 만나보세요.</p>
        <div className="magazineBody">
          <div className="leftArrow">
            <IoIosArrowBack className="magazineArrow" onClick={subIndex} />
          </div>
          <div className="swipeContainer">
            {MAGAZINE_DATA.map(function ({
              id,
              magazineColor,
              magazineImg,
              magazineTitle,
              magazineSubText,
            }) {
              return (
                <div
                  className="magazineCard"
                  key={id}
                  style={{
                    transform: `translateX(-${translateBanner(index)}%)`,
                  }}
                >
                  <img className="imgBox" src={magazineImg} alt="사진" />
                  <p className="textBold">{magazineTitle}</p>
                  <p className="textSub">{magazineSubText}</p>
                </div>
              );
            })}
          </div>
          <div className="rightArrow">
            <IoIosArrowForward className="magazineArrow" onClick={addIndex} />
          </div>
        </div>
      </div>
    </section>
  );
};

const MAGAZINE_DATA = [
  {
    id: 1,
    magazineImg: '/images/insense_1.jpeg',
    magazineTitle: '힘들었던 하루에 커다란 위로',
    magazineSubText: 'BackEnd 개발자 김원종의 하루의 끝',
  },
  {
    id: 2,
    magazineImg: '/images/insense_1.jpeg',
    magazineTitle: '주변의 모든 것이 캠핑장이 되는 과정',
    magazineSubText: 'BackEnd 개발자 박세익의 집구석 캠핑 라이프',
  },
  {
    id: 3,
    magazineImg: '/images/insense_1.jpeg',
    magazineTitle: '잘 쉬는 것보다 더욱 무드있게 휴식하는 방법',
    magazineSubText: 'BackEnd 개발자 송석준의 휴식 시간',
  },
  {
    id: 4,
    magazineImg: '/images/insense_1.jpeg',
    magazineColor: '#A4BC92',
    magazineTitle: '코딩과 휴식의 사이, 향이라는 쉼표',
    magazineSubText: 'FrontEnd 개발자 조건호의 느낌있는 휴식',
  },
  {
    id: 5,
    magazineImg: '/images/insense_1.jpeg',
    magazineTitle: '온전하게 나만을 위한 휴식공간',
    magazineSubText: 'FrontEnd 개발자 신효민의 집구석 인센스 휴식 라이프',
  },
  {
    id: 6,
    magazineImg: '/images/insense_1.jpeg',
    magazineTitle: '그의 책상공간에 더 큰 능률을 부여하는 방법',
    magazineSubText: 'FrontEnd 개발자 박효성의 코딩 공간',
  },
];
