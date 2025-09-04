// src/page/CountryChart.jsx
import React, { useEffect, useState } from 'react';
import { CircleFlag } from 'react-circle-flags'
import { FaPlay } from "react-icons/fa";
import axios from 'axios';
import { motion } from 'framer-motion';
import './CountryChart.scss';


const countries = [
  { name: 'Global', code: '', iso: 'un' },
  { name: '한국', code: 'south+korea', iso: 'kr' },
  { name: '미국', code: 'united+states', iso: 'us' },
  { name: '영국', code: 'united+kingdom', iso: 'gb' },
  { name: '일본', code: 'japan', iso: 'jp' },
  { name: '중국', code: 'china', iso: 'cn' },
  { name: '프랑스', code: 'france', iso: 'fr' },
  { name: '독일', code: 'germany', iso: 'de' },
  { name: '캐나다', code: 'canada', iso: 'ca' },
  { name: '대만', code: 'taiwan', iso: 'tw' },
  { name: '필리핀', code: 'philippines', iso: 'ph' }
];

const CountryChart = () => {
  const [selectedCountry, setSelectedCountry] = useState('Global');
  const [tracks, setTracks] = useState([]);
  const API_KEY = '2cbe9837fd1d09eae15919b7844132de';

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const countryObj = countries.find((c) => c.name === selectedCountry);
        const tag = countryObj?.code || 'global';

        const response = await axios.get(
          `https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${tag}&api_key=${API_KEY}&format=json`
        );

        const tracksWithImages = await Promise.all(
          response.data.tracks.track.slice(0, 50).map(async (track) => {
            const trackInfoRes = await axios.get(
              `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&artist=${encodeURIComponent(
                track.artist.name
              )}&track=${encodeURIComponent(track.name)}&api_key=${API_KEY}&format=json`
            );

            const image =
              trackInfoRes?.data?.track?.album?.image?.find((img) => img.size === 'large')?.['#text'] || '';

            return {
              name: track.name,
              artist: track.artist.name,
              image,
              url: track.url
            };
          })
        );

        // 🔽 이미지만 있는 곡 필터링 후 저장
        const filtered = tracksWithImages.filter(track => track.image);
        setTracks(filtered.slice(1, 12)); // 최대 24곡

      } catch (error) {
        console.error('Error fetching tracks:', error);
      }
    };
    fetchTracks();
  }, [selectedCountry]);

  return (
    <div id='wrap'>
      <div className="selector">
        {countries.map((c) => (
          <button
            key={c.name}
            onClick={() => setSelectedCountry(c.name)}
            className={selectedCountry === c.name ? 'active' : ''}
            title={c.name}
          >
            <CircleFlag className='flag' countryCode={c.iso} />
          </button>
        ))}
      </div>
      <div className="country-chart-wrapper">
      <div className="chart-layout">

        {/* 🎵 왼쪽: Top 1 정보 */}
        {tracks[0] && (
          <div className="top-track-info">
            <img src={tracks[0].image} alt={tracks[0].name} />
            <div className="info">
              <h3>{tracks[0].name}</h3>
              <p><strong>Artist:</strong> {tracks[0].artist}</p>
              {/* 앨범명이나 발매일도 가능 (있다면) */}
            </div>
          </div>
        )}

        {/* 🟢 오른쪽: 원형 배치 (23개만) */}
        <div className="chartCircle-wrapper">
          <div className="headline">
            <motion.h2 initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
              {selectedCountry} <br /> 차트
            </motion.h2>
            <button className="play-btn"><FaPlay /></button>
          </div>

          <div className="circle-wrapper">
            {tracks.slice(1, 12).map((track, index) => {
              const angle = (360 / 10) * index; // 23개 기준
              const radius = 250; // 반지름 더 키움
              const x = radius * Math.cos((angle * Math.PI) / 180);
              const y = radius * Math.sin((angle * Math.PI) / 180);

              return (
                <motion.a
                  key={index}
                  href={track.url}
                  target="_blank"
                  rel="noreferrer"
                  className="circle-image"
                  style={{
                    transform: `translate(${x}px, ${y}px) rotate(${angle}deg)`
                  }}
                >
                  <motion.img
                    src={track.image}
                    alt={track.name}
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </div>

      {/* <div className="country-chart-wrapper">
        
  
        <div className='chartCircle-wrapper'>
          <div className="headline">
            <motion.h2 initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
              {selectedCountry} <br/> 차트
            </motion.h2>
            <button className="play-btn">Play</button>
          </div>
    
          <div className="circle-wrapper">
            {tracks.map((track, index) => {
              const angle = (360 / tracks.length) * index;
              const radius = 260;
              const x = radius * Math.cos((angle * Math.PI) / 180);
              const y = radius * Math.sin((angle * Math.PI) / 180);
    
              return (
                <motion.a
                  key={index}
                  href={track.url}
                  target="_blank"
                  rel="noreferrer"
                  className="circle-image"
                  style={{
                    transform: `translate(${x}px, ${y}px) rotate(${angle}deg)`
                  }}
                >
                  <motion.img
                    src={track.image}
                    alt={track.name}
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CountryChart;
