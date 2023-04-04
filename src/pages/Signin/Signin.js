import React from 'react';
import './Signin.scss';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();

  function handleButton() {
    console.log('button 태그 동작');
    navigate('/');
  }
  function handleButton2() {
    console.log('button 태그 동작');
    navigate('/signup');
  }

  return (
    <body>
      <div className="header">
        <div className="headerBox">
          <div className="inner">
            <h1 className="pageTitle">로그인</h1>
            <button
              className="btnPageClose"
              type="button"
              onClick={handleButton}
            >
              X
            </button>
          </div>
        </div>
      </div>
      <section className="containar">
        <div className="loginSection">
          <div className="loginGuide">
            <span>아이디로 로그인해주세요.</span>
          </div>
          <div>
            <input
              className="loginInput"
              type="text"
              placeholder="아이디 입력"
            />
            {/* <button className="delBtn" type="button">
              x
            </button> */}
          </div>
          <div>
            <input
              className="passwordInput"
              type="password"
              placeholder="비밀번호 입력(영문,숫자,특수문자 입력)"
            />
            {/* <button className="delBtn" type="button">
              x
            </button> */}
          </div>
          <div>
            <input className="loginCheck" type="checkbox" />
            <span>아이디 저장</span>
          </div>
          <div>
            <button className="loginBtn">로그인</button>
          </div>
          <ul className="bottomMenu">
            <li>
              <a className="idSearch" href="">
                아이디 찾기
              </a>
            </li>
            <li>
              <a className="pwSearch" href="">
                비밀번호 찾기
              </a>
            </li>
          </ul>
          <button
            className="joinMembership"
            type="button"
            onClick={handleButton2}
          >
            <span>아직 회원이 아니세요? 회원가입</span>
          </button>
        </div>
      </section>
    </body>
  );
};

export default Signin;
