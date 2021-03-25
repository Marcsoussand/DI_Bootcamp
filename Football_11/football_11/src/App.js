import React from 'react';
import './App.css';
// import baseRequest from './requests/baseRequest';
// import getDataBase from './requests/getDataBase';
import SelectTeam from './components/SelectTeam';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SelectDisplay from './components/SelectDisplay';


const listTeams = [
  { id: 1, teamName: "Arsenal", color: "#EB302E" },
  { id: 2, teamName: "Aston Villa", color: "#480025" },
  { id: 3, teamName: "Brighton", color: "#0054A6" },
  { id: 4, teamName: "Burnley", color: "#6A003A" },
  { id: 5, teamName: "Chelsea", color: "#0A4595" },
  { id: 6, teamName: "Crystal Palace", color: "#EB302E" },
  { id: 7, teamName: "Everton", color: "00369C" },
  { id: 8, teamName: "Fulham", color: "#F5F5F5" },
  { id: 10, teamName: "Leeds", color: "#F5F5F5"},
  { id: 9, teamName: "Leicester", color: "#273E8A" },
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
      data:{},
      playersName:['GoalKeeper',
       'Def1','Def2','Def3','Def4',
       'Mid1','Mid2','Mid3',
       'For1','For2','Ford3']
  

    }
  }

   componentDidMount() {
    fetch('https://cors-anywhere.herokuapp.com/https://fantasy.premierleague.com/api/bootstrap-static/')
    .then(response => response.json())
    .then(playerData => this.setState({data:playerData}))
  
    
    
  }

  changeDisplay = () => {

  }

  changeColor = (e) => {
    const teamPicked = listTeams.find(t => t.teamName === e.target.value);
    console.log(teamPicked);

    this.setState({ team: teamPicked.teamName, backgroundColor: teamPicked.color,idteam:teamPicked.id });
    console.log(this.state);
    
    // this.getPlayer();
    
    // Filter through list of all players to get the players of the team who are not injured
    const playersTeam = this.state.data.elements.filter(t => t.team === this.state.idteam && t.chance_of_playing_this_round === 100);
    // // // Get only the best goalkeeper
    const goalKeeperList = playersTeam.filter(t => t.element_type === 1);
    const goalKeeper1 = Math.max(...goalKeeperList.map(o => o.now_cost), 0);
    const goalKeeper = goalKeeperList.find(t => t.now_cost === goalKeeper1);
    console.log("players",playersTeam);
    // const goalKeeperN = goalKeeperList[0].web_name;

    // this.setState({goalKeeperName: goalKeeper.web_name});
    

  //   const defenderList = playersTeam.filter(t => t.element_type === 2);
  //   const midfielderList = playersTeam.filter(t => t.element_type === 3);
  //   const forwardList = playersTeam.filter(t => t.element_type === 4);

  }



//  getPlayer = () => {
//    const playersTeam = this.state.data.elements.filter(t => t.team === idteam1 && t.chance_of_playing_this_round === 100 );
  //  const goalKeeperList = playersTeam.filter(t => t.element_type === 1);
  //  const goalKeeper1 = Math.max(...goalKeeperList.map(o => o.now_cost), 0);
  //  const goalKeeper = goalKeeperList.find(t => t.now_cost === goalKeeper1);
  //  const goalKeeperName1 = goalKeeper[0];
  //  console.log("players",playersTeam);
  //  console.log(goalKeeper);  
//  }

  
    // const playersTeam = await this.state.data.elements.filter(t => t.team === this.state.idteam && t.chance_of_playing_this_round === '100');
    // const goalKeeperList = await playersTeam.filter(t => t.element_type === 1);
    // const goalKeeper1 = Math.max(...goalKeeperList.map(o => o.now_cost), 0);
    // const goalKeeper = await goalKeeperList.find(t => t.now_cost === goalKeeper1)
  
    // this.setState({goalKeeperName: goalKeeper.web_name})
    

    // .then(res => res.json())
    // .then(json => this.setState({ data: json }))

    // .then(json => json.elements.filter(t => t.team == this.state.idteam && t.chance_of_playing_this_round == '100')
    // .then(play2 => play2.filter(t => t.element_type == 1)
    // .then(play3 => Math.max(...play2.map(o => o.now_cost), 0)
    // .then(play4 => play2.find(t => t.now_cost == play3)
    // .then(play5 => console.log(play4))
  // }
  // catch (e){console.log("error");}


  render() {
    const { backgroundColor, playersName } = this.state;
    // console.log(getPlayer(120))
  //  const db = this.doCORSRequest;
  //  console.log("coucou",db);
  // console.log(data);

  
  // players = this.getPlayer;

    


    return (
      <>
        <Navbar />
        <SelectTeam listTeams={listTeams} changeColor={this.changeColor} />
        <br/>
        <SelectDisplay changeDisplay={this.changeDisplay}/>
        <div id='field'>

          <div id='goal'><i id='goalKeeper' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p id='goalName'>{playersName[0]}</p></div>
          <div id='def1'className='defender'><i id='player2' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p id='def1Name'>{playersName[1]}</p></div>
          <div id='def2' className='defender'><i id='player3' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p id='def2Name'>{playersName[2]}</p></div>
          <div id='def3' className='defender'><i id='player4' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p id='def3Name'>{playersName[3]}</p></div>
          <div id='def4' className='defender'><i id='player5' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p id='def4Name'>{playersName[4]}</p></div>
          <div id='mid1' className="midfielder"><i id='player6' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p id='mid1Name'>{playersName[5]}</p></div>
          <div id='mid2' className="midfielder"><i id='player7' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p id='mid2Name'>{playersName[6]}</p></div>
          <div id='mid3' className="midfielder"><i id='player8' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p id='mid3Name'>{playersName[7]}</p></div>
          <div id='for1' className="forward"><i id='player9' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p id='for1Name'>{playersName[8]}</p></div>
          <div id='for2' className="forward"><i id='player10' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p id='for2Name'>{playersName[9]}</p></div>
          <div id='for3' className="forward"><i id='player11' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p id='for3Name'>{playersName[10]}</p></div>

        </div>
        <Footer />
      </>

    )
  }

}

export default App;
