import { useState, useEffect } from 'react';
import playersData from './players.json';
import newsData from './news.json';
import * as imgExports from './img/Exports';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPlayers, setFilteredPlayers] = useState(playersData);

    useEffect(() => {
        setFilteredPlayers(
            playersData.filter(player =>
                player.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm]);

    return (
        <div class="container">
            <div id="background"></div>
            <div id="homepage_content">
                <div id="homepage">
                    <div id="players">
                        <div id="searchbar">
                        <input
                            type="text"
                            placeholder="Search for a character"
                            onChange={event => setSearchTerm(event.target.value)}
                        />
                        </div>
                        <div id="players_list">
                            <div id="home_players_list">
                                {filteredPlayers.slice(0, 15).filter(player => player.img !== "invis").map((player) => (
                                    <div class="mini_player">
                                        <img src={imgExports[player.img]} alt="Player Image" id="playerimg"/>
                                        <img src={imgExports[player.element]} alt="Background Card" id="mini_player_card"/>
                                        <img src={imgExports[player.club]} alt="Club Logo" id="mini_player_club"/>
                                        <img src={imgExports[player.elementIcon]} alt="Element Icon" id="element_icon"/>
                                        <p>{player.position}</p>
                                        <h3 id="cardName">{player.name}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <h2 id="news_titel">News</h2>
                    <div id="home_news">
                        {newsData.slice(0, 3).map((news) => (
                            <div class="news">
                                <img src={imgExports[news.thumbnail]} alt="News Image" />
                                <h3>{news.title}</h3>
                                <a href={news.link} target="_blank">Click to read more</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;