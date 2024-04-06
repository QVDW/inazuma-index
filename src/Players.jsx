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

                <div id="players_list">
                    <div id="searchbar">
                            <input
                                type="text"
                                placeholder="Search for tags: name, position, club or element"
                                onChange={event => setSearchTerm(event.target.value)}
                            />
                    </div>
                    <div class="players_position">
                        <div class="position_list">
                            {filteredPlayers.filter(player => player.img !== "invis").map((player) => (
                                <div class="player">
                                    <img src={imgExports[player.img]} alt="Player Image" id="playerimg"/>
                                    <h3>{player.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/*<div class="players_position">
                        <h1>DF</h1>
                        <div class="position_list">
                            {filteredPlayers.filter(player => player.position == "DF").map((player) => (
                                <div class="player">
                                    <img src={imgExports[player.img]} alt="Player Image" id="playerimg"/>
                                    <h3>{player.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div class="players_position">
                        <h1>MF</h1>
                        <div class="position_list">
                            {filteredPlayers.filter(player => player.position == "MF").map((player) => (
                                <div class="player">
                                    <img src={imgExports[player.img]} alt="Player Image" id="playerimg"/>
                                    <h3>{player.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div class="players_position">
                        <h1>FW</h1>
                        <div class="position_list">
                            {filteredPlayers.filter(player => player.position == "FW").map((player) => (
                                <div class="player">
                                    <img src={imgExports[player.img]} alt="Player Image" id="playerimg"/>
                                    <h3>{player.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>*/}
                </div>
            </div>
        </div>
    );
}

export default Players;