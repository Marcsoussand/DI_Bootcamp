import React from 'react';
import '../CSS/Footer.css';

const Footer = () => {

return (
    <footer>
        <span className='footerContent'> Football 11 - Lineup builder </span>
        <a style={{color: 'green'}} className='footerContent' href="https://github.com/Marcsoussand/DI_Bootcamp/tree/main/Football_11/football_11"><i class="fab fa-github"></i></a>
        <a style={{color: 'green'}} className='footerContent' href="https://www.linkedin.com/in/marc-soussand/"><i class="fab fa-linkedin-in"></i></a>
        <a style={{color: 'green'}} className='footerContent' href="https://https://www.facebook.com/marc.soussand"><i class="fab fa-facebook"></i></a>
        <span className='footerContent' >marc.soussand@gmail.com</span>
    </footer>
)

}

export default Footer;