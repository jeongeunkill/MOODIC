// src/components/Footer.jsx
import React from 'react';
import './Footer.scss';
import { FaFacebookSquare } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      
      <footer className="footer">
        <div className="footer_left">
          <img
          src={process.env.PUBLIC_URL + "/img/Moodic_Logo_C-03.png"}
          alt="FooterLogo"/>
        </div>
        <div className='footer_right'>
          <div className="footer_top">
            <ul>
              <li><a href="#">회사소개</a></li>
              <li><a href="#">이용약관</a></li>
              <li><a href="#">개인정보처리방침</a></li>
              <li><a href="#">공지사항</a></li>
            </ul>
          </div>
          <div className="footer_bottom">
            <ul>
              <li><p>대표자명 : 김무딕</p></li>
              <li><p>사업자주소 : 서울특별시 종로구 종로 69</p></li>
              <li><p>사업자등록번호 : 123-45-67890</p></li>
              <li><p>대표전화 : 3333-3333</p></li>
              <li><p>©2025 MOODIC. All rights reserved.</p></li>
            </ul>
          </div>
          
        </div>
        <div className='copyright'>
          <ul>
            <li><a href="#"><FaFacebookSquare /></a></li>
            <li><a href="#"><GrYoutube /></a></li>
            <li><a href="#"><FaInstagram /></a></li>
          </ul> 
        </div> 
      </footer>
      <div className="belt">
          <div className="banner-track">
            {[...Array(10)].map((_, i) => (
              <img
                key={i}
                src={process.env.PUBLIC_URL + 'img/belt/belt_black.png'}
                alt="banner"
                className="banner-img"
              />
            ))}
          </div>
        </div>
    </>
  );
};

export default Footer;
