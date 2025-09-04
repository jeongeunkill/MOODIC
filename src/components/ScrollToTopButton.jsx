import React, { useState, useEffect } from 'react';
import '../components/ScrollToTopButton.scss';
import { MdArrowDropUp } from "react-icons/md";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // 스크롤 위치 체크
  const toggleVisibility = () => {
    if (window.pageYOffset > 450) { // 300px 이상 스크롤하면 버튼 보이기
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  // 스크롤 이벤트 등록/해제
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // 클릭하면 부드럽게 위로 스크롤
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='toTop'>
        <button
          className={`scroll-to-top ${visible ? 'show' : ''}`}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <MdArrowDropUp />
        </button>
    </div>
  );
};

export default ScrollToTopButton;
