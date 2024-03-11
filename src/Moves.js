import movesData from './moves.json';
import * as imgExports from './img/Exports';


const Moves = () => {
    return (
        <div class="container">
            <div id="homepage_bg"></div>
            <div id="moves">
                {movesData.map((moves) => (
                    <div class="moves">
                        <h3>{moves.move}</h3>
                        <img src={imgExports[moves.element]} alt="Element Icon" id="element_icon"/>
                        <p>{moves.type}</p>
                        <p>Power: {moves.power}</p>
                        <p>TP: {moves.tp}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Moves;