import React, { useState, useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { BANNER_INFO, MAGAZINE_DATA } from './MainData';
import todayBg from '../assets/images/insense_6.JPG';
import './Main.scss';

const Main = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('http://10.58.52.92:3000/products/productlist', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
    })
      .then(response => response.json())
      .then(data => {
        setProductList(data);
      });
  }, []);

  return (
    <div className="main">
      {/** TODO : 캐러셀 기능 적용 */}
      <div className="bannerBody">
        <div className="bannerContainer">
          {BANNER_INFO.map(function ({
            id,
            bannerImg,
            bannerTitle,
            bannerText,
          }) {
            return (
              <div
                key={id}
                className="mainBanner"
                style={{ backgroundImage: `url(${bannerImg})` }}
              >
                <div className="alignText">
                  <span className="bannerTitle">{bannerTitle}</span>
                  <span className="bannerText">{bannerText}</span>
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
        {/** TODO : 캐러셀 기능 적용 */}
        <section className="recommendSector">
          <div className="recommendTitle">오래 기억될 순간들</div>
          <div className="recommendList">
            {productList &&
              productList.map(item => (
                <div className="recommendProduct" key={item.productId}>
                  <div className="productInfo">
                    <img
                      className="productImg"
                      src={item.productImage[0]}
                      alt="상품 이미지"
                    />
                    <p className="productName">
                      <a>{item.productName}</a>
                    </p>
                    <p className="pdPrice">{item.productPrice}</p>
                  </div>
                </div>
              ))}
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
        {/** TODO : 추천상품 타이머 기능 */}
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
        <section className="subscribeSection">
          <div className="subscribeBanner">
            <h4 className="h4Style">깊어지는 나날</h4>
            <p className="subscribeSubText">
              여러가지 인센스 들로 더욱 평안해지는 휴식 시간을 가져보세요.
            </p>
            <div className="subscribeFlexBox">
              <div className="insenseLife" />
              <div className="subscribeContainer">
                <div className="insenseMood" />
                <div className="insensePost" />
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
                  src="/images/insense_4.jpeg"
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
                {MAGAZINE_DATA.map(function ({
                  id,
                  magazineColor,
                  magazineImg,
                  magazineTitle,
                  magazineSubText,
                }) {
                  return (
                    <div className="magazineCard" key={id}>
                      <img className="imgBox" src={magazineImg} alt="사진" />
                      <p className="textBold">{magazineTitle}</p>
                      <p className="textSub">{magazineSubText}</p>
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
