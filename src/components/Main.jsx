import React, { useState, useRef } from 'react';
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from "react-icons/tb";
import { FaArrowPointer } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './main.scss';

import albumData from '../data/MainData';

const Main = () => {
  const swiperRef = useRef(null);
  const [selectedAlbum, setSelectedAlbum] = useState(albumData[0]);
  const [hoveredAlbum, setHoveredAlbum] = useState(null); // 추가

  const handleNext = () => {
    swiperRef.current?.swiper.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  const handleReset = () => {
    swiperRef.current?.swiper.slideTo(0);
  };

  return (
    <div className='main'>
      <div className="controlBtn">
        <div className="nextBtn" onClick={handleNext}><TbPlayerTrackNextFilled /></div>
        <div className="prevBtn" onClick={handlePrev}><TbPlayerTrackPrevFilled /></div>
        <div className="resetBtn">
          <img
            className="insta-logo"
            src={process.env.PUBLIC_URL + '/img/instagram/insta_icon.png'}
            alt="instagram-logo"
          />
        </div>
      </div>

      <div className="mainTextImg">
        <div className="mainText">
          <h1 className="mainTitle">What's your mood today?</h1>
          <p className="mainSubtitle">Find it with <strong>MoodFlow</strong>.</p>
          <div className='mainSubtitle2'>
            <span>
              Tap an album 
                <br /> and slide through stories that flow with the music.
            </span>
            <FaArrowPointer className='pointer'/>
          </div>
        </div>

        {/* 오늘의 Mood는 어떤가요?
        MoodFlow에서
        당신의 Mood 앨범을 클릭하면, 음악과 관련된 스토리가 흘러갑니다. */}

        <div className="mainImg_slider">
          <Swiper
              effect="cards"
              grabCursor={true}
              loop={true}
              autoplay={{ delay: 1500, disableOnInteraction: false }}
              modules={[EffectCards, Autoplay]}
              className="mySwiper"
              ref={swiperRef}
            >
            {albumData.map((album, idx) => (
              <SwiperSlide className='albumImg' key={idx}>
                <img
                  src={process.env.PUBLIC_URL + '/' + album.img}
                  alt={album.name}
                  onClick={() => setSelectedAlbum(album)}
                  onMouseEnter={() => {
                    setHoveredAlbum(album.name);
                    setSelectedAlbum(album);
                  }}
                  onMouseLeave={() => setHoveredAlbum(null)}
                  style={{ cursor: 'pointer' }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {selectedAlbum && (
        <div className="insta-wrapper">
        
          <div className="insta-top">
            <div className="insta-header"></div>
          </div>

          <div
            className="insta-bottom"
            style={{
              transform: hoveredAlbum === selectedAlbum.name ? 'translateY(-80px)' : 'translateY(0)',
              transition: 'transform 0.4s ease',
            }}
          >
            <Swiper
              modules={[Autoplay]}
              slidesPerView={4}
              spaceBetween={20}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop={true}
              className="insta-swiper"
            >
              {selectedAlbum.insta.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={process.env.PUBLIC_URL + `/img/instagram/${img}`}
                    alt={`insta-${index}`}
                    className="slide-img"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}

      <div className="bottom-banner">
        <div className="banner-track">
          {[...Array(10)].map((_, i) => (
            <img
              key={i}
              src={process.env.PUBLIC_URL + '/img/belt/belt_black.png'}
              alt="banner"
              className="banner-img"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
