import movesData from './moves.json';
import * as imgExports from './img/Exports';
import { useState, useEffect } from 'react';

const Moves = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPlayers, setFilteredPlayers] = useState(movesData);

    useEffect(() => {
        setFilteredPlayers(
            movesData.filter(player =>
                player.move.toLowerCase().includes(searchTerm.toLowerCase()) ||
                player.element.toLowerCase().includes(searchTerm.toLowerCase()) ||
                player.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                player.tp.toLowerCase().includes(searchTerm.toLowerCase()) ||
                player.power.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm]);

    return (
        <div class="container">
            <div id="background"></div>
            <div id="moves">
            <div id="searchbar">
                    <input
                        type="text"
                        placeholder="Search for tags: name, element, type, power or tp"
                        onChange={event => setSearchTerm(event.target.value)}
                    />
                </div>
            {filteredPlayers.map((moves) => (
                    <div class="moves">
                        <h3>{moves.move}</h3>
                        <img src={imgExports[moves.element]} alt="Element Icon" id="element_icon"/>
                        <p>Type: {moves.type}</p>
                        <p>Power: {moves.power}</p>
                        <p>TP: {moves.tp}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Moves;