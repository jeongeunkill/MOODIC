import React from 'react';
import './scrollssection2.scss';

const ScrollSection2 = () => {
  return (
    <div className="scroll-section2">
      {/* 상단 영역 */}
      <div className="header">
        <div className="header-left">
          <div className='left_section'>
              <img src={process.env.PUBLIC_URL + "/img/scroll/grammy.png"} alt="Grammy Logo" className="grammy-logo" />
              <img src={process.env.PUBLIC_URL + "/img/scroll/top3.png"} alt="top3" className="top3" />
          </div>
          <img src={process.env.PUBLIC_URL + "/img/scroll/medal2.png"} alt="Silver Medal" className="medal" />
        </div>
        
        <div className="header-right">
            <img src={process.env.PUBLIC_URL + "/img/scroll/beyonce.png"} alt="Beyonce" className="album-cover1" />
        </div>  
      </div>

      {/* 이름 및 설명 */}
      <div className="content">
        <img src={process.env.PUBLIC_URL + "/img/scroll/name2.png"} alt="name2" className="name1" />
        <p className="intro">
          전 세계 팝·컨트리 아이콘으로, 데스티니스 차일드 출신 이후 <strong>솔로 아티스트로서 음악 산업 전반에 엄청난 영향력을 행사</strong> <br />
            강렬한 퍼포먼스와 사회적 메시지로 <strong>여성성과 흑인 정체성을 대표</strong>하며, 장르의 경계를 허무는 아티스트.
        </p>

        <div className="award-section">
          <h3>최근 주요 수상 내역</h3>
          <ul>
            <li>
              <strong>2025 그래미 어워드(2월):</strong> Cowboy Carter로 Album of the Year 및 Best Country Album, <br />그리고 “II Most Wanted” (ft.Miley Cyrus)로 Best Country Duo/Group Performance 수상
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ScrollSection2;
