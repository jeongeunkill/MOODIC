import React, { useState, useEffect } from 'react';
import { IoPerson } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
/* import { BiSolidMoviePlay } from "react-icons/bi"; */
import SearchModal from './SearchModal';
import './Navigation.scss';

const LOGO_DEFAULT = '/img/Moodic_Logo.png';       // 블랙
const LOGO_COLOR = '/img/Moodic_Logo_color.png';   // 컬러

const HomeNavigation = ({ onMainClick, onHeroClick, onChartsClick, onGenreClick, onScrollClick, onPlayerClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [logoSrc, setLogoSrc] = useState(LOGO_DEFAULT);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 로고 상태를 스크롤 & 호버 상태에 따라 결정
  useEffect(() => {
    if (scrolled) {
      setLogoSrc(isHovered ? LOGO_DEFAULT : LOGO_COLOR);  // 스크롤된 상태에서는 호버 시 블랙
    } else {
      setLogoSrc(isHovered ? LOGO_COLOR : LOGO_DEFAULT);  // 스크롤 안 됐을 때는 호버 시 컬러
    }
  }, [scrolled, isHovered]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // 외부 클릭 시 드롭다운 닫기
    useEffect(() => {
      const handleClickOutside = (e) => {
        if (!e.target.closest('.user-menu')) {
          setDropdownOpen(false);
        }
      };
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }, []);

  return (
    <>
      <nav className={`mainNav ${scrolled ? 'scrolled' : ''}`}>
        <button
          className="logo"
          onClick={onMainClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={logoSrc} alt="Logo" />
        </button>
  
        <ul className="mainNav_center">
          <li><button onClick={onScrollClick}>GRAMMY</button></li>
          <li><button onClick={onGenreClick}>GENRE</button></li>
          <li><button onClick={onChartsClick}>TOP100</button></li>        
          <li><button onClick={onHeroClick}>{/* <BiSolidMoviePlay className='NavCIon' /> */}MOODIFY</button></li>{/* Mood + Amplify → 감정을 증폭시키다 */}
          <li><button onClick={onPlayerClick}>PLAYER</button></li>
        </ul>
  
        <ul className="mainNav_right">
            <li><a href="/Brand">무딕이란?</a></li>
            <li><input type="text" placeholder="" /></li>
            <li>
              <button onClick={() => setModalOpen(true)}><FaSearch /></button>
            </li>
            <li className="user-menu">
              <button onClick={() => setDropdownOpen(prev => !prev)}>
                <IoPerson size={18} />
              </button>
              {isDropdownOpen && (
                <ul className="dropdown">
                  <li><a href="/Signup">회원가입</a></li>
                  <li><a href="/Login">로그인</a></li>
                </ul>
              )}
            </li>
          </ul>

              




      </nav>
      <SearchModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default HomeNavigation;
