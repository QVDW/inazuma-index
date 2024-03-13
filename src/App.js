import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

import Home from './Home';
import Players from './Players';
import Builder from './Builder';
import Moves from './Moves';
import News from './News';
import Error from './Error';


import './App.css';
import Logo from './img/icon.png';

function App() {
  return (
      <BrowserRouter>
          <header>
              <div id="logo">
                  <NavLink to="/"><img src={Logo} alt="LambLink Logo" /></NavLink>
              </div>
              <div id="nav">
                  <ul>
                      <li><NavLink to="Players">Players</NavLink></li>
                      <li><NavLink to="Moves">Moves</NavLink></li>
                      <li><NavLink to="Builder">Team Builder</NavLink></li>
                      <li><NavLink to="News">News</NavLink></li>
                  </ul>
              </div>
          </header>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Players" element={<Players />} />
              <Route path="/Builder" element={<Builder />} />
              <Route path="/Moves" element={<Moves />} />
              <Route path="/News" element={<News />} />
              <Route path="*" element={<Error />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;