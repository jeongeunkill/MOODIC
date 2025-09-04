import React, { useEffect } from 'react';
import './SearchModal.scss';

const SearchModal = ({ isOpen, onClose }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    if (!isOpen) return null;

    const handleBackgroundClick = (e) => {
        if (e.target.classList.contains('search-modal-overlay')) {
            onClose();
        }
    };

    return (
        <div className="search-modal-overlay" onClick={handleBackgroundClick}>
            <div className="search-modal">
                {/* 상단 검정 바 */}
                <header className="modal-header">
                    <button className="close-button" onClick={onClose}>×</button>
                </header>

                <div className="search-modal-content">
                    <section className="left-section trending-searches">
                        <h2>실시간 인기검색어</h2>
                        <ul>
                            {[
                                ['블랙핑크', 107],
                                ['aespa', 81],
                                ['뛰어', 64],
                                ['너에게 닿기를', 52],
                                ['WOODZ', -4],
                                ['Soda Pop', 29],
                                ['모르시나요', 21],
                                ['Dirty Work', 34],
                                ['Whiplash', -17],
                                ['Drive', 48]
                            ].map(([term, change], idx) => (
                                <li key={idx}>
                                    <span className="term">{idx + 1}. {term}</span>
                                    <span className={`rank ${change >= 0 ? 'up' : 'down'}`}>
                                        {change >= 0 ? '▲' : '▼'}{Math.abs(change)}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="right-section">
                        <div className="recent-searches">
                            <h2>최근 검색목록</h2>
                            <div className="empty-box">
                                아직 검색기록이 없습니다.
                            </div>
                        </div>

                        <div className="popular-keywords">
                            <h2>인기 키워드</h2>
                            <div className="keywords">
                                {[
                                    '#요즘팝송', '#하이퍼팝추천', '#감성플레이리스트', '#출근송',
                                    '#공부할때음악', '#글로벌차트', '#요즘챌린지음악', '#틱톡음악',
                                    '#바이럴노래', '#집중할때음악', '#영국차트핫100', '#핫한노래',
                                    '#라틴팝플레이리스트', '#새벽감성'
                                ].map((keyword, idx) => (
                                    <span key={idx} className="tag">{keyword}</span>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default SearchModal;
