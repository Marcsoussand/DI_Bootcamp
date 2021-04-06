import React from 'react';
import '../CSS/Navbar.css';
import logo from '../Images/logo.PNG';
// import SelectTeam from './SelectTeam';

const Navbar = (props) => {
 const {realTeams, yourTeam,about,login} =props;
return (
    <nav>
        <span style={{color:'gold'}}> <img src={logo} alt='Logo'></img>  Football 11 - Lineup builder </span>
        <span className='navItems' onClick={realTeams}>Real Teams</span>
        <span className='navItems' onClick={yourTeam}> Your Team</span>
        <span className='navItems' onClick={about}>About</span>
        <button id='login' onClick={login}> Login</button>
    </nav>
)

}

export default Navbar;