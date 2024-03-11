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
                </div>
                <div id="players_list">
                    {filteredPlayers.filter(player => player.img !== "invis").map((player) => (
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