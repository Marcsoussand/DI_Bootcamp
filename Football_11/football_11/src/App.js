import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import baseRequest from './requests/baseRequest';
import getPlayer from './requests/getPlayer';
import SelectTeam from './components/SelectTeam';
import Navbar from './components/Navbar';

const listTeams = [
  { id: 1, teamName: "Arsenal", color: "#EB302E" },
  { id: 2, teamName: "Aston Villa", color: "#480025" },
  { id: 3, teamName: "Brighton", color: "#0054A6" },
  { id: 4, teamName: "Burnley", color: "#6A003A" },
  { id: 5, teamName: "Chelsea", color: "#0A4595" },
  { id: 6, teamName: "Crystal Palace", color: "#EB302E" },
  { id: 7, teamName: "Everton", color: "00369C" },
  { id: 8, teamName: "Fulham", color: "#F5F5F5" },
  { id: 9, teamName: "Leeds", color: "#F5F5F5" },
  { id: 10, teamName: "Leicester", color: "#273E8A" },
  { id: 11, teamName: "Liverpool", color: "#E31B23" },
  { id: 12, teamName: "Manchester City", color: "#6CAEE0" },
  { id: 13, teamName: "Manchester United", color: "#D81920" },
  { id: 14, teamName: "Newcastle", color: "#383838" },
  { id: 15, teamName: "Sheffield United", color: "#ED1C24" },
  { id: 16, teamName: "Southampton", color: "#D71920" },
  { id: 17, teamName: "Tottenham", color: "#F5F5F5" },
  { id: 18, teamName: "West Bromwich Albion", color: "#F5F5F5" },
  { id: 19, teamName: "West Ham", color: "#7D2C3B" },
  { id: 20, teamName: "Wolverhampton", color: "#F9A01B" }
];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'blue',
      team: '',
      idteam: '',
    }

  }

  changeColor = (e) => {
    const teamPicked = listTeams.find(t=>t.teamName==e.target.value);
    this.setState({ team: teamPicked.teamName, backgroundColor: teamPicked.color });
    // let colorTemp = teamObj.color;
    // this.setState({backgroundColor: colorTemp});
    console.log("Color: " + this.state.backgroundColor, "Team: " + this.state.team);

  }


  componentDidMount() {
    console.log(this.state);


  }

  render() {
    const { backgroundColor, team, idteam } = this.state;
    // console.log(getPlayer(120))
    return (
      <>
        <Navbar />
        <SelectTeam listTeams={listTeams} changeColor={this.changeColor} />
        <div id='field'>

          <div id='goal'><i id='goalKeeper' style={{ color: this.state.backgroundColor }} className="fas fa-tshirt fa-3x"></i><p id='goalName'>Goal</p></div>
          <i id='player2' style={{ color: this.state.backgroundColor }} className="fas fa-tshirt fa-3x  defender"></i>
          <i id='player3' style={{ color: this.state.backgroundColor }} className="fas fa-tshirt fa-3x  defender"></i>
          <i id='player4' style={{ color: this.state.backgroundColor }} className="fas fa-tshirt fa-3x  defender"></i>
          <i id='player5' style={{ color: this.state.backgroundColor }} className="fas fa-tshirt fa-3x  defender"></i>
          <i id='player6' style={{ color: this.state.backgroundColor }} className="fas fa-tshirt fa-3x  midfielder"></i>
          <i id='player7' style={{ color: this.state.backgroundColor }} className="fas fa-tshirt fa-3x  midfielder"></i>
          <i id='player8' style={{ color: this.state.backgroundColor }} className="fas fa-tshirt fa-3x  midfielder"></i>
          <i id='player9' style={{ color: this.state.backgroundColor }} className="fas fa-tshirt fa-3x  forward"></i>
          <i id='player10' style={{ color: this.state.backgroundColor }} className="fas fa-tshirt fa-3x  forward"></i>
          <i id='player11' style={{ color: this.state.backgroundColor }} className="fas fa-tshirt fa-3x  forward"></i>

        </div>
      </>

    )
  }

}

export default App;
