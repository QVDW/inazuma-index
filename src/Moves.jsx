import movesData from './moves_list.json';
import * as imgExports from './img/Exports';
import { useState, useEffect } from 'react';
import BackBTN from './HomeButton';
import { useNavigate } from 'react-router-dom';

const Moves = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPlayers, setFilteredPlayers] = useState(movesData);
    const navigate = useNavigate();

    useEffect(() => {
        setFilteredPlayers(
            movesData.filter(player =>
                player.move.toLowerCase().includes(searchTerm.toLowerCase()) ||
                player.element.toLowerCase().includes(searchTerm.toLowerCase()) ||
                player.type.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm]);

    useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.key === 'Escape') {
            navigate('/');
          }
        };
      
        window.addEventListener('keydown', handleKeyDown);

        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
    }, [navigate]);
    
    return (
        <div class="scroll_container">
            <BackBTN />
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
                    {filteredPlayers.map((moves, index) => (
                        <div className="moves" >
                            <img src={imgExports[moves.element]} id="element_banner" />
                            <h3>{moves.move}</h3>
                            <iframe src={moves.video} frameborder="0" allow="picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        ))}
                    </div>
            </div>
        </div>
    );
}

export default Moves;