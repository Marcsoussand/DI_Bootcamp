import React from 'react';
import '../CSS/Navbar.css';
import logo from '../Images/logo.PNG';
import { NavLink } from 'react-router-dom';
// import SelectTeam from './SelectTeam';

const Navbar = (props) => {
 const {realTeams, yourTeam,about,login} =props;
return (
    <nav>
        <div id='title'> <img src={logo} alt='Logo'></img><div><p style={{color:'gold'}}>Football 11</p><p style={{fontSize:"60%", textAlign:'center'}}>Lineup builder</p></div></div>
        <div id='items'>
        <span className='navItems' onClick={realTeams} ><NavLink to ='/realTeams'>Real Teams</NavLink></span>
        <span className='navItems' onClick={yourTeam}><NavLink to='/yourTeam'>Your Team</NavLink> </span>
        <span className='navItems' onClick={about}><NavLink to='/about'>About</NavLink></span>
        <span className='navItems'id='login' onClick={login}> <NavLink to='/login'>Login</NavLink><i className="fas fa-sign-in-alt"></i></span>
        </div>
    </nav>
)

}

export default Navbar;