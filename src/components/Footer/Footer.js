import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="footerDiv">
        <div className="logoImg" />
        <div className="webInfo">
          <ul className="cont1">
            {INFO_LIST.map(a => {
              return (
                <li key={a.id}>
                  <a href={a.path}>{a.info}</a>
                </li>
              );
            })}
          </ul>
          <div className="cont2">
            ㈜ 6ixSense
            <br />
            <br />
            대표이사 : 김원종 주소 :서울특별시 강남구 테헤란로 427 위워크 타워
            선릉 2호점 10층 Wecode
            <br />
            <br />
            (주)6ixSense는 인센스 브랜드들을 통합한 레이아웃을 그리며 백엔드
            서버와 통신하기 위한 프로젝트로
            <br />
            상업적용도의 페이지가 전혀 아님을 밝힙니다.
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
