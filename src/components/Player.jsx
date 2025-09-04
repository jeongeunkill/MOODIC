import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import PlayerData from '../data/PlayerData.js';
import './Player.scss';

const Player = () => {
  const [toggledIndexes, setToggledIndexes] = useState([]);

  const handleToggle = (index) => {
    setToggledIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="makes" className="section makes">
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
      <div className="master-snap-sections">
        <Swiper className='swiper'
          spaceBetween={50}
          slidesPerView={1}
          scrollbar={{
            hide: false, // true로 하면 마우스 오버시에만 보임
          }}
          modules={[Scrollbar]} // 모듈 추가
        ><div className="swiper-scrollbar" />
          {PlayerData.map((sec, i) => {
            const isToggled = toggledIndexes.includes(i);
            return (
              <SwiperSlide key={i}>
                <div className={`master-snap-section _${i + 1} ${sec.label === 'Tayler Swift' ? 'sectionTayler' : ''}`}>
                  
                  {/* 이미지 토글 */}
                  <img
                    key={isToggled ? 'alt' : 'main'}
                    src={isToggled ? sec.images[1] : sec.images[0]}
                    alt=""
                    className="image-cover"
                  />

                  <div className="snap-top-gradient">
                    <div className="text-wrap-snap">
                      <div className="label">{sec.label}</div>
                      <div className="text-mask-snap">
                        <div className="text-snap-large first-layer">{isToggled ? sec.texts[1] : sec.texts[0]}</div>
                        <div className="text-snap-large second-layer">{sec.texts[1]}</div>
                      </div>
                    </div>
                  </div>

                  <div className="snap-bottom-gradient">
                    <div className="button-wrap-snap">
                      <div
                        className={`toggle-box ${isToggled ? 'toggled' : ''}`}
                        onClick={() => handleToggle(i)}
                      >
                        <div className="toggle-text left">{isToggled ? 'Feel The Music' : 'Play The Mood'}</div>
                        <div
                          className="toggle-circle"
                          style={{ backgroundColor: sec.buttonColor }}
                        />
                        <div className="toggle-text right">{isToggled ? 'Feel The Music' : 'Play The Mood'}</div>
                      </div>
                      <div className="label">{sec.description}</div>
                    </div>

                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Player;
