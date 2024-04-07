import playersData from './players_list.json';
import * as imgExports from './img/Exports';
import { useState, useEffect } from 'react';
import BackBTN from './HomeButton';
import { useNavigate } from 'react-router-dom';

const Builder = () => {
    const [selectedGK, setSelectedGK] = useState(playersData[0]);
    const [selectedDFsCount, setSelectedDFsCount] = useState(4);
    const [selectedMFsCount, setSelectedMFsCount] = useState(3);
    const [selectedFWsCount, setSelectedFWsCount] = useState(3);
    const [selectedBench, setSelectedBench] = useState([5]);
    const navigate = useNavigate();

    const handleDropdownChange = (event) => {
        const selectedOption = event.target.value;
        const [dfCount, mfCount, fwCount] = selectedOption.split(' ').map(Number);
        setSelectedDFsCount(dfCount);
        setSelectedMFsCount(mfCount);
        setSelectedFWsCount(fwCount);
        setSelectedDFs(Array.from({ length: dfCount }, () => playersData[0]));
        setSelectedMFs(Array.from({ length: mfCount }, () => playersData[0]));
        setSelectedFWs(Array.from({ length: fwCount }, () => playersData[0]));
    };

    const [selectedDFs, setSelectedDFs] = useState(Array.from({ length: selectedDFsCount }, () => playersData[0]));
    const [selectedMFs, setSelectedMFs] = useState(Array.from({ length: selectedMFsCount }, () => playersData[0]));
    const [selectedFWs, setSelectedFWs] = useState(Array.from({ length: selectedFWsCount }, () => playersData[0]));

    const [selectedCard, setSelectedCard] = useState(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const handleCardClick = (category, index) => {
        setSelectedCard({ category, index });
        setIsSearchOpen(true);
    };

    const handlePlayerClick = (player) => {
        switch (selectedCard.category) {
            case 'GK':
                setSelectedGK(player);
                break;
            case 'DF':
                setSelectedDFs(selectedDFs.map((df, i) => i === selectedCard.index ? player : df));
                break;
            case 'MF':
                setSelectedMFs(selectedMFs.map((mf, i) => i === selectedCard.index ? player : mf));
                break;
            case 'FW':
                setSelectedFWs(selectedFWs.map((fw, i) => i === selectedCard.index ? player : fw));
                break;
        }
        setIsSearchOpen(false);
    };

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
        <div class="build_container">
            <div id="background_svg"></div>
            <BackBTN />
            {isSearchOpen && (
                <div id="searchMenu">
                    <div id="searchbar">
                        <input
                            type="text"
                            placeholder="Search for tags: name, position, club or element"
                            onChange={event => setSearchTerm(event.target.value)}
                        />
                    </div>
                    <div id="players_list">
                    {filteredPlayers.filter(player => player.img !== "invis").map(player => (
                        <div onClick={() => handlePlayerClick(player)}>
                            <div class="mini_player">
                                <img src={imgExports[player.img]} alt="Player Image" id="playerimg"/>
                                <img src={imgExports[player.element]} alt="Background Card" id="mini_player_card"/>
                                <img src={imgExports[player.club]} alt="Club Logo" id="mini_player_club"/>
                                <img src={imgExports[player.elementIcon]} alt="Element Icon" id="element_icon"/>
                                <p>{player.position}</p>
                                <h3 id="cardName">{player.name}</h3>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            )}
                
            <div id="builder">
                <div id="GK">
                    <div class="mini_player" onClick={() => handleCardClick('GK')}>
                        <img src={imgExports[selectedGK.img]} id="playerimg"/>
                        <img src={imgExports[selectedGK.element]} id="mini_player_card"/>
                        <img src={imgExports[selectedGK.club]} id="mini_player_club"/>
                        <img src={imgExports[selectedGK.elementIcon]} alt="Element Icon" id="element_icon"/>
                        <p>{selectedGK.position}</p>
                        <h3 id="cardName">{selectedGK.name}</h3>
                    </div>
                </div>

                <div id="DF">
                    {selectedDFs.map((player, index) => (
                        <div class="mini_player" key={index} onClick={() => handleCardClick('DF', index)}>
                            <img src={imgExports[player.img]} alt="Player Image" id="playerimg"/>
                            <img src={imgExports[player.element]} alt="Background Card" id="mini_player_card"/>
                            <img src={imgExports[player.club]} alt="Club Logo" id="mini_player_club"/>
                            <img src={imgExports[player.elementIcon]} alt="Element Icon" id="element_icon"/>
                            <p>{player.position}</p>
                            <h3 id="cardName">{player.name}</h3>
                        </div>
                    ))}
                </div>

                <div id="MF">
                    {selectedMFs.map((player, index) => (
                        <div class="mini_player" key={index} onClick={() => handleCardClick('MF', index)}>
                            <img src={imgExports[player.img]} alt="Player Image" id="playerimg"/>
                            <img src={imgExports[player.element]} alt="Background Card" id="mini_player_card"/>
                            <img src={imgExports[player.club]} alt="Club Logo" id="mini_player_club"/>
                            <img src={imgExports[player.elementIcon]} alt="Element Icon" id="element_icon"/>
                            <p>{player.position}</p>
                            <h3 id="cardName">{player.name}</h3>
                        </div>
                    ))}
                </div>

                <div id="FW">
                    {selectedFWs.map((player, index) => (
                        <div class="mini_player" key={index} onClick={() => handleCardClick('FW', index)}>
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
            <div id="dropdown">
                <select onChange={handleDropdownChange}>
                    <option value="4 3 3">4 - 3 - 3</option>
                    <option value="5 3 2">5 - 3 - 2</option>
                    <option value="3 3 4">3 - 3 - 4</option>
                    <option value="2 4 4">2 - 4 - 4</option>
                    <option value="2 3 5">2 - 3 - 5</option>
                </select>
            </div>
        </div>
    );
}

export default Builder;