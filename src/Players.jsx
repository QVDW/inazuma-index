import { useState, useEffect } from 'react';
import playersData from './players_list.json';
import BackBTN from './HomeButton';
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
        <div class="scroll_container">
            <div id="background"></div>
            <div id="players">
            <BackBTN />
                <div id="big_player_container">
                    <div id="big_player">
                        <img src={imgExports.BigMarkEvans} alt="Mark Evans" id="big_player_img"/>
                        <div id="players_extra_container">
                        {filteredPlayers.filter(player => player.position == "GK").map((player) => (
                                    <div class="players_extra">
                                        <h1>{player.position}</h1>
                                        <img src={imgExports[player.elementIcon]} alt="Element Icon" id="player_extra_element_icon"/>
                                        <img src={imgExports[player.club]} alt="Club Logo" id="player_extra_club"/>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
                <div id="players_list">
                    <div id="searchbar">
                            <input
                                type="text"
                                placeholder="Search for tags: name, position, club or element"
                                onChange={event => setSearchTerm(event.target.value)}
                            />
                    </div>
                    <div class="players_position">
                        <h1>GK</h1>
                        <div class="position_list">
                            {filteredPlayers.filter(player => player.position == "GK").map((player) => (
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
                    <div class="players_position">
                        <h1>DF</h1>
                        <div class="position_list">
                            {filteredPlayers.filter(player => player.position == "DF").map((player) => (
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
                    <div class="players_position">
                        <h1>MF</h1>
                        <div class="position_list">
                            {filteredPlayers.filter(player => player.position == "MF").map((player) => (
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
                    <div class="players_position">
                        <h1>FW</h1>
                        <div class="position_list">
                            {filteredPlayers.filter(player => player.position == "FW").map((player) => (
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
            </div>
        </div>
    );
}

export default Players;