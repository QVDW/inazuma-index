import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import newsData from './news_list.json';
import * as imgExports from './img/Exports';
import BackBTN from './HomeButton';
import { useNavigate } from 'react-router-dom';

const News = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.key === 'Escape') {
            navigate('/');
          }
        };
      
        window.addEventListener('keydown', handleKeyDown);

        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
    }, [navigate]);

    return (
        <div class="scroll_container">
            <div id="background"></div>
            <BackBTN />
            <div id="news">
                {newsData.map((news) => (
                    <div class="news">
                        <img src={imgExports[news.thumbnail]} alt="News Image" />
                        <h3>{news.title}</h3>
                        <a href={news.link} target="_blank">Click to read more</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default News;