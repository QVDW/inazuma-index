import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import playersData from './players.json';
import * as imgExports from './img/Exports';

const Players = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPlayers, setFilteredPlayers] = useState(playersData);

    useEffect(() => {
        setFilteredPlayers(
            playersData.filter(player =>
                player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                player.img.toLowerCase().includes(searchTerm.toLowerCase()) ||
                player.club.toLowerCase().includes(searchTerm.toLowerCase()) ||
                player.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                player.element.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm]);

    return (
        <div class="container">
            <div id="homepage_bg"></div>
            <div id="home_players">
                <div id="home_searchbar">
                    <input
                        type="text"
                        placeholder="Search for tags: name, position, club or element"
                        onChange={event => setSearchTerm(event.target.value)}
                    />
                    <button type="submit">
                    <button type="submit"><svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#fefefe" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></button>
                    </button>
                </div>
                <div id="players_list">
                    {filteredPlayers.map((player) => (
                        <div class="mini_player">
                            <img src={imgExports[player.img]} alt="Player Image" id="playerimg"/>
                            <img src={imgExports[player.element]} alt="Background Card" id="mini_player_card"/>
                            <img src={imgExports[player.club]} alt="Club Logo" id="mini_player_club"/>
                            <p>{player.position}</p>
                            <h3 id="cardName">{player.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Players;