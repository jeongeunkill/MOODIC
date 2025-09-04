import React, { useState } from 'react';
import './Signup.scss';

const Signup = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    setShowMenu(!showMenu);
  };

  const handleOutsideClick = (e) => {
    const icon = document.getElementById('myIcon');
    const menu = document.getElementById('myMenu');
    if (menu && icon && !menu.contains(e.target) && !icon.contains(e.target)) {
      setShowMenu(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="signup-wrap">
      {/* <header className="signup-header">
        <h1 className="logo">
          <img src="/img/logo_color.png" alt="Moodic 로고" />
        </h1>
        <div className="top-right">
          <ul>
            <li><a href="#">무딕이란?</a></li>
            <li><a href="#">TOP 100</a></li>
            <li><a href="#">장르</a></li>
            <li><a href="#"><img src="/img/searchs.png" alt="검색" /></a></li>
            <li>
              <a href="#" id="myIcon" onClick={toggleMenu}>
                <img src="/img/my.png" alt="마이페이지 아이콘" />
              </a>
              {showMenu && (
                <div className="menu" id="myMenu">
                  <button><a href="/login">로그인</a></button>
                  <button><a href="/signup">회원가입</a></button>
                </div>
              )}
            </li>
          </ul>
        </div>
      </header> */}

      <main className="main">
        <div className="left">
          <img src={process.env.PUBLIC_URL + "/img/logsign/JOIN PAGE _ GO to Write.svg"} alt="" />
        </div>
        
        <div className="icon_cat"><img src={process.env.PUBLIC_URL + "/img/logsign/cat.png"} alt="" /></div>
        <div className="icon_global"><img src={process.env.PUBLIC_URL + "/img/logsign/earth.png"} alt="" /></div>
        <div className="icon_pink"><img src={process.env.PUBLIC_URL + "/img/logsign/pink_dust.png"} alt="" /></div>
        <div className="icon_wave1"><img src={process.env.PUBLIC_URL + "/img/logsign/purple_dust.png"} alt="" /></div>
        <div className="icon_wave2"><img src={process.env.PUBLIC_URL + "/img/logsign/yellow_dust.png"} alt="" /></div>
        <div className="icon_person"><img src={process.env.PUBLIC_URL + "/img/logsign/person.png"} alt="" /></div>

        <form>
          <fieldset>
            <legend>회원가입</legend>
            <div className="signIn"><img src={process.env.PUBLIC_URL + "/img/logsign/signin.png"} alt="회원가입" /></div>
            <div className="inputWrap">
              <input type="text" placeholder="이름" />
              <input type="text" placeholder="이메일" />
              <input type="text" placeholder="아이디" />
              <input type="password" placeholder="비밀번호" />
              <button type="submit" className="submitBtn">회원가입</button>
            </div>
          </fieldset>
        </form>
      </main>
    </div>
  );
};

export default Signup;
