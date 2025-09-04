// src/pages/Genre.jsx
import React, { useState, useEffect, useRef } from 'react';
import { IoIosMore } from "react-icons/io";
import axios from 'axios';
import './Genre.scss';
import { gsap } from 'gsap';


const genres = [
  { label: 'Pop', value: 'pop', image: '/img/genre/pop.png' },
  { label: 'K-Pop', value: 'k-pop', image: '/img/genre/kpop.png' },
  { label: 'Dance', value: 'dance', image: '/img/genre/dance.png' },
  { label: 'Hip-Hop', value: 'hip-hop', image: '/img/genre/hiphop.png' },
  { label: 'Ballad', value: 'ballad', image: '/img/genre/ballad.png' },
  { label: 'OST', value: 'ost', image: '/img/genre/ost.png' },
];

const API_KEY = '2cbe9837fd1d09eae15919b7844132de';

const Genre = () => {
  const [selectedGenre, setSelectedGenre] = useState(genres[0]);
  const [albums, setAlbums] = useState([]);
  const textRef = useRef(null); // ✅ 한 번만 선언

  // 텍스트 애니메이션
  useEffect(() => {
    const chars = textRef.current?.querySelectorAll('.char');
    if (chars && chars.length) {
      gsap.fromTo(chars, {
        opacity: 0,
        y: 50,
      }, {
        opacity: 1,
        y: 0,
        stagger: 0.07,
        ease: "back.out(1.7)",
        duration: 1.2
      });
    }
  }, [selectedGenre]);

  // 앨범 이미지 가져오기
  const getImageUrl = (album) => {
    const imageObj = album.image?.find((img) => img.size === 'large');
    const url = imageObj?.['#text'];
    const isDefault = url?.includes('2a96cbd8b46e442fc41c2b86b821562f');
    return isDefault || !url ? '/images/default_album.jpg' : url;
  };

  // 장르 선택 시 앨범 불러오기
  useEffect(() => {
    if (!selectedGenre) return;

    const fetchAlbums = async () => {
      try {
        const res = await axios.get('https://ws.audioscrobbler.com/2.0/', {
          params: {
            method: 'tag.gettopalbums',
            tag: selectedGenre.value,
            api_key: API_KEY,
            format: 'json',
            limit: 10,
          },
        });
        setAlbums(res.data.albums.album);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAlbums();
  }, [selectedGenre]);

  return (
    <div className="genre-page">
      <div className="genre-header">
        
        <div className="genre-header-image-txt" ref={textRef}>
  {/* 첫 줄 */}
  <div className="genre-line">
    {[
      { word: "PLAY", /* color: "#ff69b4" */ },
      { word: "THE", /* color: "#f47a4b" */ },
      { word: "MOOD", /* color: "#f6e636" */ },
    ].map(({ word, color }, wordIndex) => (
      <span key={wordIndex} className="word" style={{ color }}>
        {word.split("").map((char, i) => (
          <span key={`${wordIndex}-${i}`} className="char">{char}</span>
        ))}
        <span className="char">&nbsp;</span>
      </span>
    ))}
  </div>

  {/* 두 번째 줄 */}
  <div className="genre-line">
    {[
      { word: "FEEL", /* color: "#37ff8a" */ },
      { word: "THE", /* color: "#00cfff" */ },
      { word: "MUSIC", /* color: "#a47aff" */ },
    ].map(({ word, color }, wordIndex) => (
      <span key={wordIndex} className="word" style={{ color }}>
        {word.split("").map((char, i) => (
          <span key={`${wordIndex + 3}-${i}`} className="char">{char}</span>
        ))}
        <span className="char">&nbsp;</span>
      </span>
    ))}
  </div>
</div>



        <img
          src={process.env.PUBLIC_URL + "/img/genre/orange_icon.png"}
          alt="Play the Mood, Feel the Music"
          className="genre-header-image-orange"
        />
        <img
          src={process.env.PUBLIC_URL + "/img/genre/green_icon.png"}
          alt=""
          className="genre-header-image-green"
        />
      </div>

      

      <div className="genre-container">
        <div className="genre-content-left" >
          <div className='genre-navWrap'>
              <nav className="genre-nav">
                {genres.map((g) => (
                  <button
                    key={g.value}
                    className={`genre-btn ${g.value} ${selectedGenre.value === g.value ? 'active' : ''}`}
                    onClick={() => setSelectedGenre(g)}
                  >
                    {g.label}
                  </button>
                ))}

              </nav>
            </div>
          <div className={`genre-image ${selectedGenre.value}`}>
            <img src={selectedGenre.image} alt={selectedGenre.label} />
          </div>

        </div>
        <div className='genre-content-right'>
            <div className="track-list">
              {albums.map((album, idx) => (
                <div
                  key={idx}
                  className="track-item"
                  // className={`track-item ${idx % 2 === 0 ? 'left' : 'right'}`}
                >
                  <img
                    src={getImageUrl(album)}
                    alt={album.name}
                    className="album-art"
                  />
                  <div className="zigzag-line"></div> {/* ← 라인 추가 */}
                  <div className="track-info">
                    <div className='track-info-left'>
                      <h3>{album.name}</h3>
                      <p>{album.artist.name}</p>
                    </div>
                    <a href={album.url} target="_blank" rel="noopener noreferrer">
                      <IoIosMore />
                    </a>
                  </div>
                </div>
              ))}
            </div>
        </div>
        
      </div>
      <div className="footer__up">
        <div className="banner-track">
          {[...Array(10)].map((_, i) => (
            <img
              key={i}
              src={process.env.PUBLIC_URL + 'img/belt/belt_color.png'}
              alt="banner"
              className="banner-img"
            />
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default Genre;
