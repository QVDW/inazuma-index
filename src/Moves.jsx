import movesData from './moves_list.json';
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
            <div id="moves_container">
                <div id="moves_searchbar">
                     <input
                         type="text"
                         placeholder="Search for tags: name, element, type, power or tp"
                         onChange={event => setSearchTerm(event.target.value)}
                     />
                 </div>

                <div id="moves_list">
                {filteredPlayers.map((moves) => (
                        <div class="moves">
                            <div id = "moves_bg"></div>
                            <h3>{moves.move}</h3>
                            <img src={imgExports[moves.element]} alt="Element Icon" />
                            <p id="move_type">Type: {moves.type}</p>
                            <p>Power: {moves.power}</p>
                            <p>TP: {moves.tp}</p>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/DqZ17BF7JgE?si=DGNfS1mw-V1JMGTX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Moves;