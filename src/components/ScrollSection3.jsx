import React from 'react';
import './scrollssection3.scss';

const ScrollSection3 = () => {
  return (
    <div className="scroll-section3">
      {/* 상단 영역 */}
      <div className="header">
        <div className="header-left">
          <img src={process.env.PUBLIC_URL + "/img/scroll/sabrina.png"} alt="Sabrina" className="album-cover" />
        </div>
        <div className="header-right">
          <div className='right_section'>
              <img src={process.env.PUBLIC_URL + "/img/scroll/grammy.png"} alt="Grammy Logo" className="grammy-logo" />
              <img src={process.env.PUBLIC_URL + "/img/scroll/top3.png"} alt="top3" className="top3" />
          </div>
          <img src={process.env.PUBLIC_URL + "/img/scroll/medal3.png"} alt="Bronze Medal" className="medal" />
        </div>
      </div>

      {/* 이름 및 설명 */}
      <div className="content">
        <img src={process.env.PUBLIC_URL + "/img/scroll/name3.png"} alt="name3" className="name" />
        <p className="intro">
          미국 팝 싱어송라이터 겸 배우로, 개인적인 이야기와 감성적인 가사를 담은 음악으로 <strong>전 세계 팬들과 깊게 공감하며 성장한 아티스트</strong><br />
          2022년 앨범 Emails I Can’t Send를 시작으로 2024년 Short n’ Sweet를 통해 음악적 전환기에 서며,<br /><strong>장르를 넘나드는 매력</strong>을 보여주고 있다.<br />
          무대 위에서의 카리스마와 솔직한 표현력으로<strong> 차세대 팝스타 중에서도 특히 주목</strong>받고 있습니다.
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

export default ScrollSection3;
