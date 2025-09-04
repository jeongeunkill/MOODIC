// src/page/Brand.jsx
import React, { useEffect, useRef } from 'react';
import './Brand.scss';


const Brand = () => {
  const menuRef = useRef();
  const iconRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        iconRef.current &&
        !menuRef.current.contains(e.target) &&
        !iconRef.current.contains(e.target)
      ) {
        menuRef.current.style.display = 'none';
      }
    };
    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div id="brandWrap" className="brand-page">

      {/* Main */}
      <main id="content">
        <section className="one">
          <div className="banner_1"><img src={process.env.PUBLIC_URL + "/img/MOODIC/moodic_text (1).png"} alt="배너1" /></div>
          <img src={process.env.PUBLIC_URL + "/img/MOODIC/yellow_icon.png"} alt="" className="y" />
          <img src={process.env.PUBLIC_URL + "/img/MOODIC/green_icon.png"} alt="" className="g" />
        </section>

        <section className="two">
          <div className="banner_2"><img src={process.env.PUBLIC_URL + "/img/MOODIC/moodic_text (2).png"} alt="배너2" /></div>
          <img src={process.env.PUBLIC_URL + "/img/MOODIC/pink_icon.png"} alt="" className="p" />
          <img src={process.env.PUBLIC_URL + "/img/MOODIC/blue_icon.png"} alt="" className="b" />
        </section>

        <section className="three">
          <div className="banner_3"><img src={process.env.PUBLIC_URL + "/img/MOODIC/moodic_text (4).png"} alt="배너3" /></div>
          <img src={process.env.PUBLIC_URL + "/img/MOODIC/orange_icon.png"} alt="" className="o" />
          <img src={process.env.PUBLIC_URL + "/img/MOODIC/purple_icon.png"} alt="" className="pp" />
        </section>

        {/* <section className="four">
          <div className="banner_4"><img src={process.env.PUBLIC_URL + "/img/MOODIC/moodic_text (4).png"} alt="배너4" /></div>
        </section> */}
      </main>
    </div>
  );
};

export default Brand;
