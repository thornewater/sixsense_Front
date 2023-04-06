import React, { useState, useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { BANNER_INFO, MAGAZINE_DATA } from './MainData';
import todayBg from '../assets/images/insense_6.JPG';
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
    <div className="Main">
      <div className="bannerBody">
        <div className="bannerContainer">
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
      </div>
      <div className="alignBox">
        <IoIosArrowBack className="mainArrowIcon" />
        <IoIosArrowForward className="mainArrowIcon" />
      </div>
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
        {/** 추천 목록 캐러셀 지역 */}
        <section className="recommendSector">
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
                cursor: 'pointer',
              }}
            >
              더 보기 <IoIosArrowForward />
            </button>
          </div>
        </section>
        {/** 오늘의 추천 지역 */}
        <section className="todayRecommend">
          <div
            className="todayBg"
            style={{ backgroundImage: `url(${todayBg})` }}
          />
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
        {/** 구독 지역  */}
        <section className="subscribeSection">
          <div className="subscribeBanner">
            <h4 className="h4Style">깊어지는 나날</h4>
            <p className="subscribeSubText">
              여러가지 인센스 들로 더욱 평안해지는 휴식 시간을 가져보세요.
            </p>
            <div className="subscribeFlexBox">
              <div
                className="insenseLife"
                style={{ backgroundColor: '#C9EEFF' }}
              />
              <div className="subscribeContainer">
                <div
                  className="insenseMood"
                  style={{ backgroundColor: '#97DEFF' }}
                />
                <div
                  className="insensePost"
                  style={{ backgroundColor: '#62CDFF' }}
                />
              </div>
            </div>
          </div>
        </section>
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
                  src="/images/insense_6.JPG"
                  alt="우리의 이야기"
                />
                <p className="storyText">우리의 이야기</p>
              </div>
            </div>
          </div>
        </section>
        <section className="magazineSection">
          <div className="magazineBanner">
            <h3 className="magazineTitle">순간들의 무드</h3>
            <p className="magazineSubText">
              향을 통해 달라지는 휴식을 만나보세요.
            </p>
            <div className="magazineBody">
              <div className="leftArrow">
                <IoIosArrowBack className="magazineArrow" />
              </div>
              <div className="swipeContainer">
                {MAGAZINE_DATA.map(function (content) {
                  return (
                    <div className="magazineCard" key={content.id}>
                      <img
                        className="imgBox"
                        style={{ backgroundColor: content.magazineColor }}
                        src={content.magazineImg}
                        alt="사진"
                      />
                      <p className="textBold">{content.magazineTitle}</p>
                      <p className="textSub">{content.magazineSubText}</p>
                    </div>
                  );
                })}
              </div>
              <div className="rightArrow">
                <IoIosArrowForward className="magazineArrow" />
              </div>
            </div>
          </div>
        </section>
        <section className="companySection">
          <div className="companyBackground" />
          <div className="companyTextBox">
            <p className="companyText">제주 티뮤지엄 티스톤</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Main;
