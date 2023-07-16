import React, { useState, useEffect } from 'react';
import { api } from '../../api';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { TodayCommend } from './TodayCommend/TodayCommend';
import { SubscribeSection } from './SubscribeSection/SubscribeSection';
import { BrandSection } from './BrandSection/BrandSection';
import { MagazineSection } from './MagazineSection/MagazineSection';
import { BannerContainer } from './BannerContainer/BannerContainer';
import './Main.scss';

const Main = () => {
  const [index, setIndex] = useState(0);
  const [lists, setLists] = useState([]);
  const navigate = useNavigate();
  const swipeRecommend = 78;

  const addIndex = () => {
    index >= lists.length - 3 ? setIndex(0) : setIndex(index + 1);
  };

  const subIndex = () => {
    index <= 0 ? setIndex(lists.length - 3) : setIndex(index - 1);
  };

  const translateRecommend = index => {
    return index * swipeRecommend;
  };
  const askMoveToCart = item => {
    const answerToAsk = window.confirm(
      '장바구니에 담겼습니다. 이동하시겠습니까?'
    );
    answerToAsk ? navigate('/cart') : navigate('/');
  };

  useEffect(() => {
    const recommendTimer = setInterval(() => {
      addIndex();
    }, 4000);
    return () => {
      clearInterval(recommendTimer);
    };
  }, [lists, index]);

  useEffect(() => {
    fetch(`${api.products}?limit=10&offset=0`, {
      headers: {
        method: 'GET',
      },
    })
      .then(res => res.json())
      .then(data => setLists(data.response));
  }, []);

  return (
    <div className="main">
      <BannerContainer />
      <div className="mainContents">
        <div className="mainNotice">
          <p className="notice">공지사항</p>
          <div className="noticeBox">
            <ul className="noticeList">
              <li>2023년 4월 향과함께 무드 챌린지 이벤트 공지</li>
            </ul>
            <IoIosArrowForward style={{ marginRight: '10px' }} />
          </div>
        </div>
        <section className="recommendSector">
          <div className="recommendTitle">오래 기억될 순간들</div>
          <div className="recommendWrapper">
            <div className="recommendList">
              <div className="leftArrow">
                <IoIosArrowBack className="recommendArrow" onClick={subIndex} />
              </div>
              {lists &&
                lists.map(item => (
                  <div
                    className="recommendProduct"
                    key={item.productId}
                    style={{
                      transform: `translateX(-${translateRecommend(index)}%)`,
                    }}
                  >
                    <div className="productInfo">
                      <div className="productImgBox">
                        <Link to={`/ProductDetail/${item.productId}`}>
                          <img
                            className="productImg"
                            src={
                              item.productImages && item.productImages[0]
                                ? item.productImages[0]
                                : 'default-image.jpg'
                            }
                            alt="상품 이미지"
                          />
                          <img
                            className="productHoverImg"
                            src={
                              item.productImages && item.productImages[1]
                                ? item.productImages[1]
                                : 'default-image.jpg'
                            }
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
                            to={`/products/${item.productId}`}
                            style={{
                              textDecoration: 'none',
                              color: '#252525',
                            }}
                          >
                            {item.productName}
                          </Link>
                        </span>
                      </p>
                      {item.discountRate > 0 ? (
                        <div>
                          <p className="pdPriceCancel">
                            {Math.floor(item.productPrice)}
                          </p>
                          <div className="pdPriceDiscountBox">
                            <span className="pdPriceDiscount">
                              {item.discountPrice.toLocaleString()}WON
                            </span>
                            <span className="percentText">
                              {item.discountRate * 100}%
                            </span>
                          </div>
                        </div>
                      ) : (
                        <p className="pdPrice">
                          {Math.floor(item.productPrice).toLocaleString()}WON
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              <div className="rightArrow">
                <IoIosArrowForward
                  className="recommendArrow"
                  onClick={addIndex}
                />
              </div>
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
            <p className="companyText" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Main;
