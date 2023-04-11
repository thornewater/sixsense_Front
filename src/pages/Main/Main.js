import React, { useState, useEffect } from 'react';
import { Link, navigate, useNavigate } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { TodayCommend } from './TodayCommend/TodayCommend';
import { SubscribeSection } from './SubscribeSection/SubscribeSection';
import { BrandSection } from './BrandSection/BrandSection';
import { MagazineSection } from './MagazineSection/MagazineSection';
import { BannerContainer } from './BannerContainer/BannerContainer';
import { MAIN_PRODUCT } from './MainData';
import './Main.scss';

const Main = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const swipeRecommend = 81;

  const addIndex = () => {
    index >= MAIN_PRODUCT.length - 3 ? setIndex(0) : setIndex(index + 1);
  };

  const subIndex = () => {
    index <= 0 ? setIndex(MAIN_PRODUCT.length - 3) : setIndex(index - 1);
  };

  const translateRecommend = index => {
    return index * swipeRecommend;
  };
  const askMoveToCart = () => {
    const answerToAsk = window.confirm(
      '장바구니에 담겼습니다. 이동하시겠습니까?'
    );
    answerToAsk ? navigate('/cart') : navigate('/');
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
                      <div className="productImgBox">
                        <Link to={`/Detail/${item.productId}`}>
                          <img
                            className="productImg"
                            src={item.productImage[0]}
                            alt="상품 이미지"
                          />
                          <img
                            className="productHoverImg"
                            src={item.productImage[1]}
                            alt="상품 이미지"
                          />
                        </Link>
                        <AiOutlineShoppingCart
                          className="hoverCart"
                          onClick={askMoveToCart}
                        />
                      </div>
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
                      {item.productDiscountRate > 0 ? (
                        <div>
                          <p className="pdPriceCancel">{item.productPrice}</p>
                          <div className="pdPriceDiscountBox">
                            <span className="pdPriceDiscount">
                              {item.productPrice -
                                item.productPrice * item.productDiscountRate}
                            </span>
                            <span className="percentText">
                              {item.productDiscountRate * 100}%
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
          <div className="recommendMore">
            <button type="button" className="recommendMoreButton">
              <Link to="/productList" className="toProductList">
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
          <img
            className="companyBackground"
            src="/images/wecode.jpg"
            alt="wecode"
          />
          <div className="companyTextBox">
            <p className="companyText">> Wecode</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Main;
