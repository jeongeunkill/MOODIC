import React, { useEffect, useRef, useState } from "react";
import ScrollSection1 from "./ScrollSection1"; 
import ScrollSection2 from "./ScrollSection2"; 
import ScrollSection3 from "./ScrollSection3"; 
import './ScrollSection.scss';

const ScrollSection = () => {


  return (
    <div  className="scroll-section">
      <ScrollSection1 />
      <ScrollSection2 />
      <ScrollSection3 />
    </div>
  );
};

export default ScrollSection;
