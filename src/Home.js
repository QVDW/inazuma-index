import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';



const Homepage = () => {

    return (
        <div id="home_container">
            <div id="home_fade">
                    <div id="extra_nav">
                        <ul>
                            <li><NavLink to="/Players">Players</NavLink></li>
                            <li><NavLink to="/Moves">Moves</NavLink></li>
                            <li><NavLink to="/Builder">Team Builder</NavLink></li>
                            <li><NavLink to="/News">News</NavLink></li>
                        </ul>
                    </div>
                <div id="home_text">
                    <h1>Inazuma Index</h1>
                    <p>Explore player stats, move details, build your dream team, and stay updated with the latest news on Victory Road all at Inazuma Index! Your go-to hub for everything Victory Road has to offer!</p>
                    <NavLink to="/News" id="news_button">News</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Homepage;