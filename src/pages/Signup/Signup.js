import React, { useState } from 'react';
import './Signup.scss';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    nameValue: '',
    phoneValue: '',
    dateValue: '',
    genderValue: '',
    idValue: '',
    pwValue: '',
    pwCheckValue: '',
  });

  const {
    nameValue,
    phoneValue,
    dateValue,
    genderValue,
    idValue,
    pwValue,
    pwCheckValue,
  } = userInfo;

  const getUserInto = event => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const [serviceChecked, setServiceChecked] = useState(false);
  const serviceCheckBoxClicked = () => {
    setServiceChecked(!serviceChecked);
  };

  const [informationChecked, setInformationChecked] = useState(false);
  const informationCheckBoxClicked = () => {
    setInformationChecked(!informationChecked);
  };
  // const handleCheckbox = () => {
  //   setIsChecked(prev => !prev);
  // };

  const valueReset = event => {
    const { name } = event.target;
    setUserInfo({ ...userInfo, [name]: '' });
  };
  const inputValidate =
    nameValue.length >= 1 &&
    phoneValue.match(/^[0-9]{10,11}$/) &&
    dateValue.length >= 1 &&
    genderValue.length >= 1 &&
    idValue.match(/^[a-z0-9]{4,12}$/) &&
    pwValue.match(
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/
    ) &&
    pwCheckValue.length >= 1;

  const validate =
    inputValidate && serviceChecked && informationChecked === true;

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
              onChange={getUserInto}
            />
            {nameValue ? (
              <button
                className="nameDelBtn"
                type="button"
                name="nameValue"
                onClick={valueReset}
              >
                x
              </button>
            ) : null}
          </div>
          <div>
            <input
              className="phoneInput"
              type="text"
              placeholder="휴대폰번호"
              value={phoneValue}
              name="phoneValue"
              onChange={getUserInto}
            />
            {phoneValue ? (
              <button
                className="phoneDelBtn"
                type="button"
                name="phoneValue"
                onClick={valueReset}
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
              onChange={getUserInto}
            />
          </div>
          <div>
            <select
              className="genderInput"
              value={genderValue}
              name="genderValue"
              onChange={getUserInto}
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
              onChange={getUserInto}
            />
            {idValue ? (
              <button
                className="idDelBtn"
                type="button"
                name="idValue"
                onClick={valueReset}
              >
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
              onChange={getUserInto}
            />
            {pwValue ? (
              <button
                className="pwDelBtn"
                type="button"
                name="pwValue"
                onClick={valueReset}
              >
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
              onChange={getUserInto}
            />
            {pwCheckValue ? (
              <button
                className="pwCheckDelBtn"
                type="button"
                value={pwCheckValue}
                name="pwCheckValue"
                onClick={valueReset}
              >
                x
              </button>
            ) : null}
          </div>
          <div>
            <span className="pwNotice">비밀번호 입력 시 유의사항</span>
          </div>

          <div className="agreedBox">
            <div className="accordion" open>
              <summary className="accordionMain">
                <label htmlFor="allowEvery" className="accordionText">
                  <input
                    id="allowEvery"
                    className="agreedCheck"
                    type="checkbox"
                  />
                  모든 약관 및 정보 수신 동의
                </label>
              </summary>
              <ul className="agreedCheck">
                <li className="terms">회원 약관</li>

                <li>
                  <input
                    id="checkBox1"
                    className="agreedCheck"
                    type="checkbox"
                    onClick={serviceCheckBoxClicked}
                  />
                  <label>[필수] 서비스 이용약관</label>
                </li>
                <li>
                  <input
                    id="checkBox2"
                    className="agreedCheck"
                    type="checkbox"
                    onClick={informationCheckBoxClicked}
                  />
                  <label>[필수] 개인정보 이용 및 수집 대한 동의</label>
                </li>
                <li>
                  <input
                    id="checkBox3"
                    className="agreedCheck"
                    type="checkbox"
                  />
                  <label>[선택 ] 개인정보 제3자 제공 동의</label>
                </li>
                <li>
                  <input
                    id="checkBox4"
                    className="agreedCheck"
                    type="checkbox"
                  />
                  <span>[선택] 문자 수신 동의</span>
                </li>
              </ul>
            </div>
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
