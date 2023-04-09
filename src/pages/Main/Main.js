import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { TodayCommend } from './TodayCommend/TodayCommend';
import { SubscribeSection } from './SubscribeSection/SubscribeSection';
import { BrandSection } from './BrandSection/BrandSection';
import { MagazineSection } from './MagazineSection/MagazineSection';
import { BannerContainer } from './BannerContainer/BannerContainer';
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
