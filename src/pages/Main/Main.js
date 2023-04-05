import React, { useState, useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import todayBg from '../assets/images/today_product_1.jpeg';
import './Main.scss';

const Main = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('/data/data.json', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => setProductList(data));
  }, []);

  return (
    <div className="mainBody">
      <div className="bannerBody">
        {BANNER_INFO.map(function (banner) {
          return (
            <div
              key={banner.id}
              className="mainBanner"
              style={{ backgroundImage: `url(${banner.bannerImg})` }}
            >
              <div className="alignText">
                <span className="bannerTitle">{banner.bannerTitle}</span>
                <span className="bannerText">{banner.bannerText}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="alignBox">
        <IoIosArrowBack className="mainArrowIcon" />
        <IoIosArrowForward className="mainArrowIcon" />
      </div>
      {/* <div className="mainPagination"></div> */}
      <div className="mainContents">
        <div className="mainNotice">
          <p className="notice">공지사항</p>
          <div className="noticeBox">
            <ul className="noticeList">
              <li>2023년 3월 다다일상 챌린지 당첨자 발표</li>
            </ul>
            <IoIosArrowForward style={{ marginRight: '10px' }} />
          </div>
        </div>
        <div className="recommendSector">
          <div className="recommendTitle">오래 기억될 순간들</div>
          <div className="recommendList">
            {productList.map(function (product) {
              return (
                <div className="recommendProduct" key={product.id}>
                  <div className="productInfo">
                    <img
                      className="productImg"
                      src={product.pdImage}
                      alt="상품 이미지"
                    />
                    <p className="productName">
                      <a>{product.pdName}</a>
                    </p>
                    <p className="pdPrice">{product.pdPrice}</p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* <div className="miniAlignBox">
          <IoIosArrowBack className="miniArrowIcon" />
          <IoIosArrowForward className="miniArrowIcon" />
        </div> */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '60px',
            }}
          >
            <button
              type="button"
              style={{
                padding: '15px 60px',
                border: '1px solid lightgray',
                borderRadius: '5px',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                color: '#252525',
                backgroundColor: 'white',
              }}
            >
              더 보기 <IoIosArrowForward />
            </button>
          </div>
        </div>
        <div className="todayRecommend">
          <div
            className="todayBg"
            style={{ backgroundImage: `url(${todayBg})` }}
          />
          <div className="todayTextArea">
            <div className="todayTimeText">
              <h3 style={{ fontSize: '26px', fontWeight: '500' }}>
                오늘의 기억
              </h3>
              <p className="timeText">01:54:55</p>
            </div>
            <h4 style={{ fontSize: '28px', fontWeight: '500' }}>
              베스트 인센스 컬렉션
            </h4>
            <div className="todayPriceText">
              <div className="priceText">24000원</div>
              <div className="discountText">21600원</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BANNER_INFO = [
  {
    id: 1,
    bannerImg: 'images/osulloc_1.png',
    bannerTitle: '첫 번째 배너 타이틀',
    bannerText: '첫 번째의 소개글',
  },
  {
    id: 2,
    bannerImg: 'images/osulloc_2.jpeg',
    bannerTitle: '두 번째 배너 타이틀',
    bannerText: '두 번째의 소개글',
  },
  {
    id: 3,
    bannerImg: 'images/osulloc_3.jpeg',
    bannerTitle: '세 번째 배너 타이틀',
    bannerText: '세 번째의 소개글',
  },
  {
    id: 4,
    bannerImg: 'images/osulloc_4.jpeg',
    bannerTitle: '네 번째 배너 타이틀',
    bannerText: '네 번째의 소개글',
  },
  {
    id: 5,
    bannerImg: 'images/osulloc_5.jpeg',
    bannerTitle: '다섯 번째 배너 타이틀',
    bannerText: '다섯 번째의 소개글',
  },
];
export default Main;
