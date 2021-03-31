import React from 'react';
import '../CSS/Navbar.css';
// import SelectTeam from './SelectTeam';

const Navbar = (props) => {
 const {realTeams, yourTeam} =props;
return (
    <nav>
        <span> Football 11 - Lineup builder </span>
        <span className='navItems' onClick={realTeams}>Real Teams</span>
        <span className='navItems' onClick={yourTeam}> Your Team</span>
        <button id='login'> Login</button>
    </nav>
)

}

export default Navbar;