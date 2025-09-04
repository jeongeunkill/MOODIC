import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoPerson } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import SearchModal from './SearchModal';
import './Navigation.scss';

const LOGO_DEFAULT = '/img/Moodic_Logo.png';
const LOGO_COLOR = '/img/Moodic_Logo_color.png';

const GlobalNavigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [logoSrc, setLogoSrc] = useState(LOGO_DEFAULT);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const newLogo = (scrolled && !isHovered) || (!scrolled && isHovered)
      ? LOGO_COLOR
      : LOGO_DEFAULT;
    setLogoSrc(newLogo);
  }, [scrolled, isHovered]);

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
        <Link
          className="logo"
          to="/"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img src={logoSrc} alt="Moodic Logo" />
        </Link>

        <ul className="mainNav_center">
          {/* 중앙 메뉴 */}
        </ul>

        <ul className="mainNav_right">
          <li><Link to="/Brand">무딕이란?</Link></li>
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
                <li><Link to="/Signup">회원가입</Link></li>
                <li><Link to="/Login">로그인</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>

      <SearchModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default GlobalNavigation;
