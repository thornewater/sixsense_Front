import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { TodayCommend } from './TodayCommend/TodayCommend';
import { SubscribeSection } from './SubscribeSection/SubscribeSection';
import { BrandSection } from './BrandSection/BrandSection';
import { MagazineSection } from './MagazineSection/MagazineSection';
import { BannerContainer } from './BannerContainer/BannerContainer';
import { MAIN_PRODUCT } from './MainData';
import './Main.scss';

const Main = () => {
  const [index, setIndex] = useState(0);

  const addIndex = () => {
    index >= MAIN_PRODUCT.length - 3 ? setIndex(0) : setIndex(index + 1);
  };

  const subIndex = () => {
    index <= 0 ? setIndex(MAIN_PRODUCT.length - 3) : setIndex(index - 1);
  };

  const translateRecommend = index => {
    return index * 81;
  };

  useEffect(() => {
    const recommendTimer = setInterval(() => {
      setIndex(index => {
        return index >= MAIN_PRODUCT.length - 3 ? 0 : index + 1;
      });
    }, 4000);
    return () => {
      clearInterval(recommendTimer);
    };
  }, [index]);

  return (
    <div className="main">
      <BannerContainer />
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
        <section className="recommendSector">
          <div className="recommendTitle">오래 기억될 순간들</div>
          <div className="recommendWrapper">
            <div className="leftArrow">
              <IoIosArrowBack className="recommendArrow" onClick={subIndex} />
            </div>
            <div className="recommendList">
              {MAIN_PRODUCT &&
                MAIN_PRODUCT.map(item => (
                  <div
                    className="recommendProduct"
                    key={item.productId}
                    style={{
                      transform: `translateX(-${translateRecommend(index)}%)`,
                    }}
                  >
                    <div className="productInfo">
                      <Link to={`/Detail/${item.productId}`}>
                        <img
                          className="productImg"
                          src={item.productImage}
                          alt="상품 이미지"
                        />
                      </Link>
                      <p className="productName">
                        <span>
                          <Link
                            to={`/Detail/${item.productId}`}
                            style={{ textDecoration: 'none', color: '#252525' }}
                          >
                            {item.productName}
                          </Link>
                        </span>
                      </p>
                      {item.discountRate > 0 ? (
                        <div>
                          <p className="pdPriceCancel">{item.productPrice}</p>
                          <div className="pdPriceDiscountBox">
                            <span className="pdPriceDiscount">
                              {item.productPrice -
                                item.productPrice * item.discountRate}
                            </span>
                            <span className="percentText">
                              {item.discountRate * 100}%
                            </span>
                          </div>
                        </div>
                      ) : (
                        <p className="pdPrice">{item.productPrice}</p>
                      )}
                    </div>
                  </div>
                ))}
            </div>
            <div className="rightArrow">
              <IoIosArrowForward
                className="recommendArrow"
                onClick={addIndex}
              />
            </div>
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
                border: '1px solid lightgrey',
                borderRadius: '5px',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'white',
                cursor: 'pointer',
              }}
            >
              <Link
                to="/productList"
                style={{ textDecoration: 'none', color: '#252525' }}
              >
                더 보기 <IoIosArrowForward />
              </Link>
            </button>
          </div>
        </section>
        <TodayCommend />
        <SubscribeSection />
        <BrandSection />
        <MagazineSection />
        <section className="companySection">
          <div className="companyBackground" />
          <div className="companyTextBox">
            <p className="companyText">> Wecode</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Main;
