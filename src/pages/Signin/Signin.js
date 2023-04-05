import React, { useState } from 'react';
import './Signin.scss';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();

  const onReset = () => {
    setIdInput('');
  };

  const [active, setActive] = useState(false);

  const [idValue, setIdInput] = useState('');
  const [pwValue, setPwInput] = useState('');

  const isPassed = () => {
    idValue.length >= 1 && pwValue.length >= 1
      ? setActive(true)
      : setActive(false);
  };

  const handleId = e => {
    setIdInput(e.target.value);
  };
  const handlePw = e => {
    setPwInput(e.target.value);
  };

  return (
    <div className="signin">
      <div className="header">
        <div className="headerBox">
          <div className="inner">
            <h1 className="pageTitle">로그인</h1>
            <button
              className="btnPageClose"
              type="button"
              onClick={() => navigate('/')}
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
          <form className="loginForm">
            <input
              className="loginInput"
              type="text"
              placeholder="아이디 입력"
              name="idValue"
              value={idValue}
              onKeyUp={isPassed}
              onChange={handleId}
            />
            <button className="delBtn" type="button" onClick={onReset}>
              x
            </button>
            <div>
              <input
                className="passwordInput"
                type="password"
                placeholder="비밀번호 입력(영문,숫자,특수문자 입력)"
                name="pwValue"
                onKeyUp={isPassed}
                onChange={handlePw}
                value={pwValue}
              />
            </div>
          </form>
          <div>
            <input className="loginCheck" type="checkbox" />
            <span>아이디 저장</span>
          </div>
          <div>
            <button
              // className="loginBtn"
              className={active ? 'activeLoginBtn' : 'loginBtn'}
              disabled={idValue === '' || pwValue === '' ? true : false}
              onClick={() => navigate('/')}
            >
              로그인
            </button>
          </div>
          <ul className="bottomMenu">
            <li>
              <a className="idSearch">아이디 찾기</a>
            </li>
            <li>
              <a className="pwSearch">비밀번호 찾기</a>
            </li>
          </ul>
          <button
            className="joinMembership"
            type="button"
            onClick={() => navigate('/signup')}
          >
            <span>아직 회원이 아니세요?</span> <em> 회원가입 ></em>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Signin;
