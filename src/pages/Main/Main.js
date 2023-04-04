import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import './Main.scss';

const Main = () => {
  return (
    <div className="mainBody">
      <div className="bannerBody">
        {BANNER_INFO.map(function (a) {
          return (
            <>
              <div
                key={a.id}
                className="mainBanner"
                style={{ backgroundImage: `url(${a.bannerImg})` }}
              />
              {/* <div className="alignText">
                <span className="bannerTitle">{a.bannerTitle}</span>
                <span className="bannerText">{a.bannerText}</span>
              </div> */}
            </>
          );
        })}
      </div>
      <div className="alignBox">
        <IoIosArrowBack className="arrowIcon" />
        <IoIosArrowForward className="arrowIcon" />
      </div>
      <div className="mainPagination"></div>
      <div className="mainContents">
        <div className="recommendTitle">오늘의 향을 추천해 드려요</div>
        <div className="recommendList" />
      </div>
    </div>
  );
};

const BANNER_INFO = [
  {
    id: 1,
    bannerColor: '#8D7B68',
    bannerImg: 'images/osulloc_1.png',
    bannerTitle: '첫 번째 배너 타이틀',
    bannerText: '첫 번째의 소개글',
  },
  {
    id: 2,
    bannerColor: '#A4907C',
    bannerImg: 'images/osulloc_2.jpeg',
    bannerTitle: '두 번째 배너 타이틀',
    bannerText: '두 번째의 소개글',
  },
  {
    id: 3,
    bannerColor: '#C8B6A6',
    bannerImg: 'images/osulloc_3.jpeg',
    bannerTitle: '세 번째 배너 타이틀',
    bannerText: '세 번째의 소개글',
  },
  {
    id: 4,
    bannerColor: '#F1DEC9',
    bannerImg: 'images/osulloc_4.jpeg',
    bannerTitle: '네 번째 배너 타이틀',
    bannerText: '네 번째의 소개글',
  },
  {
    id: 5,
    bannerColor: '#F5EBEB',
    bannerImg: 'images/osulloc_5.jpeg',
    bannerTitle: '다섯 번째 배너 타이틀',
    bannerText: '다섯 번째의 소개글',
  },
];
export default Main;
