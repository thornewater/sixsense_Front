import React from 'react';
import './Signup.scss';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="signup">
      <div className="header">
        <div className="headerBox">
          <div className="inner">
            <h1 className="pageTitle">정보입력 및 약관동의</h1>
            <button
              className="btnPageClose"
              type="button"
              onClick={() => navigate('/signin')}
            >
              X
            </button>
          </div>
        </div>
      </div>
      <section className="containar">
        <div className="loginSection">
          <div>
            <input className="nameInput" type="text" placeholder="이름" />
          </div>
          <div>
            <input
              className="phoneInput"
              type="number"
              placeholder="휴대폰번호"
            />
          </div>
          <div>
            <input className="dateInput" type="date" placeholder="생년월일" />
          </div>
          <div>
            <select className="genderInput">
              <option>성별</option>
              <option>남자</option>
              <option>여자</option>
              <option>선택안함</option>
            </select>
          </div>
          <div>
            <input
              className="loginInput"
              type="text"
              placeholder="아이디 (영문 또는 숫자 4-12자)"
            />
          </div>
          <div>
            <input
              className="passwordInput"
              type="password"
              placeholder="비밀번호 입력(영문 소문자,숫자,특수문자 조합 8-16자)"
            />
          </div>
          <div>
            <input
              className="passwordCheck"
              type="password"
              placeholder="비밀번호 확인"
            />
            <button className="delBtn" type="button">
              x
            </button>
          </div>
          <div>
            <span className="pwNotice">비밀번호 입력 시 유의사항</span>
          </div>

          <div className="agreedBox">
            <details className="accordion" open>
              <summary className="accordionMain">
                <input className="agreedCheck" type="checkbox" />
                <label className="accordionText">
                  모든 약관 및 정보 수신 동의
                </label>
              </summary>
              <ul className="agreedCheck">
                <li className="terms">회원 약관</li>
                <li>
                  <input className="agreedCheck" type="checkbox" />
                  <label>[필수] 서비스 이용약관</label>
                </li>
                <li>
                  <input className="agreedCheck" type="checkbox" />
                  <label>[필수] 개인정보 이용 및 수집 대한 동의</label>
                </li>
                <li>
                  <input className="agreedCheck" type="checkbox" />
                  <label>[선택 ] 개인정보 제3자 제공 동의</label>
                </li>
                <li>
                  <input className="agreedCheck" type="checkbox" />
                  <span>[선택] 문자 수신 동의</span>
                </li>
              </ul>
            </details>
          </div>

          <div>
            <button className="signupBtn">동의하고 가입</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
