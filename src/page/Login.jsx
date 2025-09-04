import React from 'react';
import './Login.scss';
import logo from '../img/logo_color.png';
import loginText from '../img/logsign/login.png';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div>
      
      
      <div className="login-wrap">
        <main className="main">
           <div className="left">
            <img src={process.env.PUBLIC_URL + "/img/logsign/LOGIN PAGE _ GO to Write.svg"} alt="" />
          </div>
          
          <div className="icon_cat"><img src={process.env.PUBLIC_URL + "/img/logsign/cat.png"} alt="" /></div>
          <div className="icon_global"><img src={process.env.PUBLIC_URL + "/img/logsign/earth.png"} alt="" /></div>
          <div className="icon_pink"><img src={process.env.PUBLIC_URL + "/img/logsign/pink_dust.png"} alt="" /></div>
          <div className="icon_wave1"><img src={process.env.PUBLIC_URL + "/img/logsign/purple_dust.png"} alt="" /></div>
          <div className="icon_wave2"><img src={process.env.PUBLIC_URL + "/img/logsign/yellow_dust.png"} alt="" /></div>
          <div className="icon_person"><img src={process.env.PUBLIC_URL + "/img/logsign/person.png"} alt="" /></div>
  
  
          <form>
            <fieldset>
              <legend>로그인</legend>
              <div className="login"><img src={process.env.PUBLIC_URL + "/img/logsign/login.png"} alt="로그인" /></div>
              <div className="input-wrap">
                <input type="text" placeholder="아이디" />
                <input type="password" placeholder="비밀번호" />
                <button type="submit" className="submit-btn">로그인</button>
                <a href="/signup" className="signup-link">회원가입</a>
              </div>
            </fieldset>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Login;
