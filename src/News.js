import { Link } from 'react-router-dom';
import newsData from './news.json';
import * as imgExports from './img/Exports';


const News = () => {
    return (
        <div class="container">
            <div id="background"></div>
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