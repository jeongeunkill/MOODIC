import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

const Navigation = ({ onMainClick, onHeroClick, onChartsClick, onGenreClick, onScrollClick, onPlayerClick }) => {
  const [logoSrc, setLogoSrc] = useState('/img/Moodic_Logo.png'); // 기본 이미지
  const [scrolled, setScrolled] = useState(false); // 스크롤 여부 상태

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) { // 100px 이상 스크롤 시 변경
        setScrolled(true);
        setLogoSrc('/img/Moodic_Logo_color.png');
      } else {
        setScrolled(false);
        setLogoSrc('/img/Moodic_Logo.png');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    
    <nav className={`mainNav ${scrolled ? 'scrolled' : ''}`}>
      
      <button
        className='logo'
        onClick={onMainClick}
      >
        <img src={logoSrc} alt="Logo" />
      </button>

      <ul className='mainNav_center'>
        <li><button onClick={onScrollClick}>GRAMMY</button></li>
        <li><button onClick={onGenreClick}>GENRE</button></li>
        <li><button onClick={onChartsClick}>CHARTS</button></li>
        <li><button onClick={onHeroClick}>Hero</button></li>
        <li><button onClick={onPlayerClick}>PLAYER</button></li>
      </ul>

      
        <ul className="mainNav_right">
          <li><Link to="/Login">로그인</Link></li>
          <li><Link to="/Register">룰룰</Link></li>
          <li><Link to="/Brand">무딕이란?</Link></li>
          <li><Link to="/Playlist">플레이리스트</Link></li>
          <li><Link to="/Signup">회원가입</Link></li>
        </ul>
      
    </nav>
  );
};

export default Navigation;
