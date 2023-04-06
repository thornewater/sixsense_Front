import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContents">
        <div className="logoImg">
          {/* TODO : 나중에 무료이미지 찾아서 넣을 때를 대비해 주석을 삭제하지 않았습니다. */}
          {/* <img
            clsssName="logo"
            src="/images/osulloc_logo.png"
            alt="오설록 로고"
          /> */}
        </div>
        <div className="webInfo">
          <ul className="serviceInfo">
            {INFO_LIST.map(aboutInfo => {
              return (
                <li key={aboutInfo.id}>
                  <a href={aboutInfo.path}>{aboutInfo.info}</a>
                </li>
              );
            })}
          </ul>
          <div className="companyInfo">
            ㈜ 6ixSense
            <br />
            <br />
            대표이사 : xxx 주소 :서울특별시 강남구 테헤란로 427 위워크 타워 선릉
            2호점 10층 Wecode
            <br />
            <br />
            (주)6ixSensesms 오설록 브랜드를 제외한 입점 브랜드에 대해서는
            통신판매중개자 이며 통신판매의 당사자가 아닙니다.
            <br />
            따라서 입점판매자가 등록한 상품정보 및 거래에 대해 책임을 지지
            않습니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const INFO_LIST = [
  {
    id: 1,
    info: '회사소개',
    path: '~',
  },
  {
    id: 2,
    info: '서비스 이용약관',
    path: '~',
  },
  {
    id: 3,
    info: '개인정보 처리방침',
    path: '~',
  },
  {
    id: 4,
    info: '영상정보 처리방침',
    path: '~',
  },
  {
    id: 5,
    info: '포인트 사용 ',
    path: '~',
  },
  {
    id: 6,
    info: '회사소개',
    path: '~',
  },
];
