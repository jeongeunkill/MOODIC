// src/page/Home.jsx
import React, { useRef } from 'react';
import HomeNavigation from '../components/HomeNavigation';
import Hero from '../components/Hero';
import ScrollSection from '../components/ScrollSection';
import Player from '../components/Player';
import Genre from './Genre';
import CountryChart from './CountryChart';
import Main from '../components/Main';
import './Home.scss';

const Home = () => {
  const mainRef = useRef(null);
  const heroRef = useRef(null);
  const chartsRef = useRef(null);
  const genreRef = useRef(null);
  const scrollRef = useRef(null);
  const playerRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <HomeNavigation
        onMainClick={() => scrollToSection(mainRef)}
        onChartsClick={() => scrollToSection(chartsRef)}
        onGenreClick={() => scrollToSection(genreRef)}
        onScrollClick={() => scrollToSection(scrollRef)}
        onHeroClick={() => scrollToSection(heroRef)}
        onPlayerClick={() => scrollToSection(playerRef)}
      />

      <div className="home">
        <div ref={mainRef}><Main /></div>
        <div ref={scrollRef}><ScrollSection /></div>
        <div ref={genreRef}><Genre /></div>
        <div ref={chartsRef}><CountryChart /></div>
        <div ref={heroRef}><Hero /></div>
        <div ref={playerRef}><Player /></div>
      </div>
    </>
  );
};

export default Home;
