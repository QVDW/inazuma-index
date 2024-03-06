import { Link } from 'react-router-dom';
import playersData from './players.json';
import * as clubLogos from './img/clubs/clubExport';
import * as playerImages from './img/players/playerExport';


const Home = () => {
    return (
        <div class="container">
            <div id="homepage_bg"></div>
            <div id="homepage_content">
                <div id="homepage">
                    <div id="home_players">
                        <div id="home_searchbar">
                            <input type="text" placeholder="Search for a character" />
                            <button type="submit"><svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#fefefe" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></button>
                        </div>
                        <div id="home_players_list">
                                {playersData.map((player) => (
                                    <div class="mini_player">
                                        <img src={clubLogos[player.club]} alt="Club Logo" />
                                        <img src={playerImages[player.img]} alt="Player Image" id="playerimg"/>
                                        <p>{player.position}</p>
                                        <h3 id="cardName">{player.name}</h3>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;