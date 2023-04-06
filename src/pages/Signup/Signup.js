import React, { useState } from 'react';
import './Signup.scss';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [nameValue, setNameValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [genderValue, setGenderValue] = useState('');
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  const [pwCheckValue, setPwCheckValue] = useState('');

  const getUserName = event => {
    setNameValue(event.target.value);
  };

  const getUserPhone = event => {
    setPhoneValue(event.target.value);
  };

  const getUserDate = event => {
    setDateValue(event.target.value);
  };

  const getUserGender = event => {
    setGenderValue(event.target.value);
  };

  const getUserId = event => {
    setIdValue(event.target.value);
  };

  const getUserPw = event => {
    setPwValue(event.target.value);
  };

  const getUserPwCheck = event => {
    setPwCheckValue(event.target.value);
  };

  const nameReset = () => {
    setNameValue('');
  };

  const phoneReset = () => {
    setPhoneValue('');
  };

  const idReset = () => {
    setIdValue('');
  };

  const pwReset = () => {
    setPwValue('');
  };

  const pwCheckReset = () => {
    setPwCheckValue('');
  };

  const validate =
    nameValue.length >= 1 &&
    phoneValue.length >= 1 &&
    dateValue.length >= 1 &&
    genderValue.length >= 1 &&
    idValue.match(/^[a-z0-9]{4,12}$/) &&
    pwValue.match(
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/
    ); //&&
  //pwCheckValue.length >= 1;

  return (
    <div className="signup">
      <div className="header">
        <div className="headerBox">
          <div className="inner">
            <h1 className="pageTitle">정보입력 및 약관동의</h1>
            <Link to="/signin">
              <button className="btnPageClose" type="button">
                X
              </button>
            </Link>
          </div>
        </div>
      </div>
      <section className="containar">
        <div className="loginSection">
          <div>
            <input
              className="nameInput"
              type="text"
              placeholder="이름"
              value={nameValue}
              name="nameValue"
              onChange={getUserName}
            />
            {nameValue ? (
              <button className="nameDelBtn" type="button" onClick={nameReset}>
                x
              </button>
            ) : null}
          </div>
          <div>
            <input
              className="phoneInput"
              type="number"
              placeholder="휴대폰번호"
              value={phoneValue}
              name="phoneValue"
              onChange={getUserPhone}
            />
            {phoneValue ? (
              <button
                className="phoneDelBtn"
                type="button"
                onClick={phoneReset}
              >
                x
              </button>
            ) : null}
          </div>
          <div>
            <input
              className="dateInput"
              type="date"
              placeholder="생년월일"
              value={dateValue}
              name="dateValue"
              onChange={getUserDate}
            />
          </div>
          <div>
            <select
              className="genderInput"
              value={genderValue}
              name="genderValue"
              onChange={getUserGender}
            >
              <option>성별</option>
              <option>남자</option>
              <option>여자</option>
              <option>선택안함</option>
            </select>
          </div>
          <div>
            <input
              className="idInput"
              type="text"
              placeholder="아이디 (영문 또는 숫자 4-12자)"
              value={idValue}
              name="idValue"
              onChange={getUserId}
            />
            {idValue ? (
              <button className="idDelBtn" type="button" onClick={idReset}>
                x
              </button>
            ) : null}
          </div>
          <div>
            <input
              className="passwordInput"
              type="password"
              placeholder="비밀번호 입력(영문 소문자,숫자,특수문자 조합 8-16자)"
              value={pwValue}
              name="pwValue"
              onChange={getUserPw}
            />
            {pwValue ? (
              <button className="pwDelBtn" type="button" onClick={pwReset}>
                x
              </button>
            ) : null}
          </div>
          <div>
            <input
              className="passwordCheck"
              type="password"
              placeholder="비밀번호 확인"
              value={pwCheckValue}
              name="pwCheckValue"
              onChange={getUserPwCheck}
            />
            {pwCheckValue ? (
              <button
                className="pwCheckDelBtn"
                type="button"
                value={pwCheckValue}
                name="pwCheckValue"
                onClick={pwCheckReset}
              >
                x
              </button>
            ) : null}
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
            <button
              className={validate ? 'activeSignupBtn' : 'signupBtn'}
              disabled={!validate}
              onClick={() => navigate('/')}
            >
              로그인
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
