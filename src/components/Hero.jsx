// moodic/src/components/Hero.jsx
import {  } from "react-router-dom";
import React from 'react';
import './Hero.scss';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
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
      <div className="video-hero">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="background-video"
          /* poster="/img/123(14).jpg" */
        >
          <source src="/video/Moodic_Video.mp4" type="video/mp4" />
          
        </video>

        <div className="main-container">
          <div className="master-hero-section">
            {/* <div className="logo-wrap-hero">
              <img src="/img/Moodic_Logo.png" alt="Moodic Logo" className="logo-hero" />
            </div> */}

            {/* <div className="bottom-tile-hero">
              <div className="byq-logo">
                <div className="icon-sparkle">✨</div>
                <div className="label">Moodic Studio</div>
              </div>

              <div className="text-wrap-hero-middle">
                <div className="label hero-animated">
                  이번 주 가장 빛나는 뮤직비디오, 놓치지 마세요. <br />
                  Built on GSAP. Designed by Moodic.
                </div>
              </div>

              <div className="right-hero-year">
                <div className="label">2025</div>
                <div className="icon-sparkle">🌟</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
