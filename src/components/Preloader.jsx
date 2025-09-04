// src/components/Preloader.jsx

import React, { useEffect, useRef } from 'react';
import './Preloader.scss';
import gsap from 'gsap';

const Preloader = () => {
  const preloaderRef = useRef(null);
  const logoWrapRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    tl.to(preloaderRef.current, { opacity: 1, duration: 0.5 })
      .to(logoWrapRef.current, { height: '100%', duration: 1 })
      .to(overlayRef.current, { width: '100%', duration: 0.8 }, '-=0.6')
      .to(preloaderRef.current, { opacity: 0, duration: 0.5, delay: 0.5 })
      .set(preloaderRef.current, { display: 'none' });
  }, []);

  return (
    <div className="preloader" ref={preloaderRef}>
      <div className="wrap-preloader-logo" ref={logoWrapRef}>
        <div className="logo-wrap-hero preloader-logo">
          <img
            src="../public/img/Moodic_Logo_P-03.svg"
            alt="Moodic Logo"
            className="logo-hero"
            loading="lazy"
          />
          <div className="overlay-preloader-logo" ref={overlayRef}></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
