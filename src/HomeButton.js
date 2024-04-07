import { BrowserRouter, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';

const BackBTN = () => {

    return (
        <div id="BackBTN">
          <NavLink to="/" title="Back to Homepage">ESC</NavLink><h1>BACK</h1>
        </div>
    );
}

export default BackBTN;