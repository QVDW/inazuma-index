import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';



const Homepage = () => {

    return (
        <div class="container">
            <div id="home_bg"></div>
            <div id="home_main">
                <div id="home_players">
                    <Link to="/players" className="home_link">
                        <div class="home_class_text">
                            <h1>Players</h1>
                        </div>
                    </Link>
                </div>
                <div id="home_builder">
                    <Link to="/builder" className="home_link">
                        <div class="home_class_text">
                            <h1>Team Builder</h1>
                        </div>
                    </Link>
                </div>
                <div id="home_vertical">
                    <div id="home_moves">
                        <Link to="/moves" className="home_link">
                            <div class="home_class_text">
                                <h1>Moves</h1>
                            </div>
                        </Link>
                    </div>
                    <div id="home_news">
                        <Link to="/news" className="home_link">
                            <div class="home_class_text">
                                <h1>News</h1>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;