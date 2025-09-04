import React from 'react';
import './scrollssection1.scss';

const ScrollSection1 = () => {
  return (
    <div className="scroll-section1">
      {/* 상단 영역 */}
      <div className="header">
        <div className="header-left">
          <img src={process.env.PUBLIC_URL + "/img/scroll/kendrick.png"} alt="Kendrick Lamar" className="album-cover" />
        </div>
        <div className="header-right">
          <div className='right_section'>
              <img src={process.env.PUBLIC_URL + "/img/scroll/grammy.png"} alt="Grammy Logo" className="grammy-logo" />
              <img src={process.env.PUBLIC_URL + "/img/scroll/top3.png"} alt="top3" className="top3" />
          </div>
          <img src={process.env.PUBLIC_URL + "/img/scroll/medal1.png"} alt="Gold Medal" className="medal" />
        </div>
      </div>

      {/* 이름 및 설명 */}
      <div className="content">
        <img src={process.env.PUBLIC_URL + "/img/scroll/name1.png"} alt="name1" className="name" />
        <p className="intro">
          미국 캘리포니아 컴프턴 출신의 래퍼이자 작곡가, 프로듀서로, 사회적 메시지를 담은 '컨셔스 랩'의 대표주자<br />
          예술성과 스토리텔링 능력으로 힙합의 경계를 넓혔으며, 2018년 <strong>*DAMN.*</strong>으로 퓰리처상을 수상한 최초의 래퍼<br />
          시대의 불평등과 정체성을 음악으로 풀어내며 힙합 역사상 <strong>가장 영향력 있는 아티스트 중 하나</strong>로 꼽힙니다.
        </p>

        <div className="award-section">
          <h3>최근 주요 수상 내역</h3>
          <ul>
            <li>
              <strong>2025 그래미 어워드(2월):</strong> “Not Like Us”로 Record of the Year, Song of the Year, Best Rap Performance, Best Rap Song, Best Music Video 등 5관왕 달성
            </li>
            <li>
              <strong>2025 BET 어워드(6월):</strong> 앨범 GNX로 Album of the Year 수상
            </li>
            <li>
              <strong>2025 슈퍼볼 하프타임 쇼(2월):</strong> 힙합 솔로 아티스트 최초로 하프타임 쇼 단독 헤드라이너로 선정되어 역사적 공연 진행
            </li>
            <li>
              <strong>2025 에미상 노미네이션(7월):</strong> 슈퍼볼 공연으로 Outstanding Music Direction 등 에미상 주요 부문 후보 지명
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ScrollSection1;
