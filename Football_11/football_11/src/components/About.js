import '../CSS/About.css';
import logo from '../Images/logo.PNG';

const About = () => {
    return (
        <div id="about">
        <h1>Our purpose</h1>
        <h4>Real Teams :</h4>
        <p> Our main goal is to provide real time line-up builder for English Premier League Teams.<br/>
        As of today, more than 8 millions people are FPL players, which is the most popular Fantasy Football game in the world. <br/><br/>
        Fetching the official Fantasy Premier League API, we give you the opportunity to display players,
        with various tactics. <br/> You may also exclude injured or suspended players for the upcoming gameweek.
        </p>
        <br/>
        <h4>Your Team : </h4>
        <p>You may also use this website for your own team, and store your players into our online database.</p>
        <img src={logo} alt='Logo'></img>
        </div>
    )
}

export default About;