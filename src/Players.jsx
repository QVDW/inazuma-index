import { useState, useEffect } from 'react';
import playersData from './players_list.json';
import * as imgExports from './img/Exports';

const Players = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPlayers, setFilteredPlayers] = useState(playersData);

    useEffect(() => {
        setFilteredPlayers(
            playersData.filter(player =>
                player.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                player.img?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                player.club?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                player.position?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                player.element?.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm]);

    return (
        <div class="container">
            <div id="background"></div>
            <div id="players">
                <div id="searchbar">
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
                            <img src={imgExports[player.elementIcon]} alt="Element Icon" id="element_icon"/>
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