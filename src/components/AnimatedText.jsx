// src/components/AnimatedText.jsx

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';

const AnimatedText = ({ text }) => {
  const textRef = useRef(null);

  useEffect(() => {
    // 글자를 한 글자씩 나눔
    const split = new SplitType(textRef.current, {
      types: 'chars',
      tagName: 'span',
    });

    gsap.fromTo(
      split.chars,
      { y: '100%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        stagger: 0.05,
        duration: 0.6,
        ease: 'power2.out',
      }
    );
  }, []);

  return (
    <h1 ref={textRef} className="animated-text">
      {text}
    </h1>
  );
};

export default AnimatedText;
