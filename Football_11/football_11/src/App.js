import React from 'react';
import './App.css';
import SelectTeam from './components/SelectTeam';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SelectDisplay from './components/SelectDisplay';
import PlayersOnField from './components/PlayersonField';
import PlayersOnBench from './components/PlayersonBench';
import YourTeam from './components/YourTeam';

const listTeams = [
  { id: 1, teamName: "Arsenal", color: "#EB302E", logo: "https://www.fantasy-coach.fr/wp-content/uploads/2020/08/arsenal.png" },
  { id: 2, teamName: "Aston Villa", color: "#480025", logo: "https://www.fantasy-coach.fr/wp-content/uploads/2020/08/astonvilla.png" },
  { id: 3, teamName: "Brighton", color: "#0054A6", logo: "https://www.fantasy-coach.fr/wp-content/uploads/2020/08/brighton.png" },
  { id: 4, teamName: "Burnley", color: "#6A003A", logo: "https://www.fantasy-coach.fr/wp-content/uploads/2020/08/burnley.png" },
  { id: 5, teamName: "Chelsea", color: "#0A4595", logo: "https://www.fantasy-coach.fr/wp-content/uploads/2020/08/chelsea.png" },
  { id: 6, teamName: "Crystal Palace", color: "#EB302E", logo: "https://www.fantasy-coach.fr/wp-content/uploads/2020/08/palace.png" },
  { id: 7, teamName: "Everton", color: "00369C", logo: "https://www.fantasy-coach.fr/wp-content/uploads/2020/08/everton.png" },
  { id: 8, teamName: "Fulham", color: "#F5F5F5", logo: "https://www.fantasy-coach.fr/wp-content/uploads/2020/08/fulham.png" },
  { id: 10, teamName: "Leeds", color: "#F5F5F5", logo: "https://www.fantasy-coach.fr/wp-content/uploads/2020/08/leeds.png" },
  { id: 9, teamName: "Leicester", color: "#273E8A", logo: "https://www.fantasy-coach.fr/wp-content/uploads/2020/08/leicester.png" },
  { id: 11, teamName: "Liverpool", color: "#E31B23", logo: "https://www.fantasy-coach.fr/wp-content/uploads/2020/08/liverpool.png" },
  { id: 12, teamName: "Manchester City", color: "#6CAEE0", logo: "https://www.fantasy-coach.fr/wp-content/uploads/2020/08/mancity.png" },
  { id: 13, teamName: "Manchester United", color: "#D81920", logo: "https://www.fantasy-coach.fr/wp-content/uploads/2020/08/manutd.png" },
  { id: 14, teamName: "Newcastle", color: "#383838", logo: "https://www.fantasy-coach.fr/wp-content/uploads/2020/08/newcastle.png" },
  { id: 15, teamName: "Sheffield United", color: "#ED1C24", logo: "https://www.fantasy-coach.fr/wp-content/uploads/2020/08/sheffield.png" },
  { id: 16, teamName: "Southampton", color: "#D71920", logo: "https://www.fantasy-coach.fr/wp-content/uploads/2020/08/southampton.png" },
  { id: 17, teamName: "Tottenham", color: "#F5F5F5", logo: "https://www.fantasy-coach.fr/wp-content/uploads/2020/08/spurs.png" },
  { id: 18, teamName: "West Bromwich Albion", color: "#F5F5F5", logo: "https://www.fantasy-coach.fr/wp-content/uploads/2020/08/westbrom.png" },
  { id: 19, teamName: "West Ham", color: "#7D2C3B", logo: "https://www.fantasy-coach.fr/wp-content/uploads/2020/08/westham.png" },
  { id: 20, teamName: "Wolverhampton", color: "#F9A01B", logo: "https://www.fantasy-coach.fr/wp-content/uploads/2020/08/wolves.png" }
];

const formation = ["4-3-3", "4-3-2-1", "4-2-3-1", "4-4-2", "5-4-1", "5-3-2", "3-4-3", "3-5-2"];



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page:'real',
      backgroundColor: 'red',
      team: '',
      idteam: '',
      badge:"https://www.fantasy-coach.fr/wp-content/uploads/2020/08/arsenal.png",
      data: {},
      playersName: ['Goal',
        'Def1', 'Def2', 'Def3', 'Def4',
        'Mid1', 'Mid2', 'Mid3',
        'For1', 'For2', 'For3'],
      benchName: [],
      display: '4-3-3',
      displayFormation: ['line4-1 player defender',
        'line4-2 player defender', 'line4-3 player defender',
        'line4-4 player defender',
        'line3-1 player midfielder',
        'line3-2 player midfielder',
        'line3-3 player midfielder',
        'line3-1 player forward',
        'line3-2 player forward',
        'line3-3 player forward'],
      disabled: false,
      visibilityStatus: 'hidden',
      




    }
  }

  componentDidMount() {
    // fetch('https://cors-anywhere.herokuapp.com/https://fantasy.premierleague.com/api/bootstrap-static/',{
    fetch('https://fantasy.premierleague.com/api/bootstrap-static/?include_summary="true"', {
      method: "GET",
      // mode: "cors", // no-cors, *cors, same-origin
      // headers:{
      //   "Access-Control-Allow-Origin": "*",
      //   'Access-Control-Allow-Headers': "*"
      // }
    })
      .then(response => response.json())
      .then(playerData => {
        console.log(playerData);
        this.setState({ data: playerData })
      })



  }

  realTeams = () => {
    this.setState({page:'real', visibilityStatus:'hidden'});
    console.log(this.state.page);
  }

  yourTeam = () => {
    this.setState({page:'your',visibilityStatus:'hidden'})
    console.log(this.state.page);
  }

  changeDisplay = async (e) => {
    await this.setState({ display: e.target.value });
    // console.log(this.state.display);
    switch (this.state.display) {
      case '4-3-3':
        this.setState({
          displayFormation: ['line4-1 player defender',
            'line4-2 player defender',
            'line4-3 player defender',
            'line4-4 player defender',
            'line3-1 player midfielder',
            'line3-2 player midfielder',
            'line3-3 player midfielder',
            'line3-1 player forward',
            'line3-2 player forward',
            'line3-3 player forward'],
        })
        break;
      case '4-2-3-1':
        this.setState({
          displayFormation: ['line4-1 player defender',
            'line4-2 player defender',
            'line4-3 player defender',
            'line4-4 player defender',
            'line2-1 player defmidfielder',
            'line2-2 player defmidfielder',
            'line3-1 player offmidfielder',
            'line3-2 player offmidfielder',
            'line3-3 player offmidfielder',
            'line1-1 player forward'],

        })
        break;
      case '4-3-2-1':
        this.setState({
          displayFormation: ['line4-1 player defender',
            'line4-2 player defender',
            'line4-3 player defender',
            'line4-4 player defender',
            'line3-1 player defmidfielder',
            'line3-2 player defmidfielder',
            'line3-3 player defmidfielder',
            'line2-1 player offmidfielder',
            'line2-2 player offmidfielder',
            'line1-1 player forward'],
        })
        break;
      case '4-4-2':
        this.setState({
          displayFormation: ['line4-1 player defender',
            'line4-2 player defender',
            'line4-3 player defender',
            'line4-4 player defender',
            'line4-1 player midfielder',
            'line4-2 player midfielder',
            'line4-3 player midfielder',
            'line4-4 player midfielder',
            'line2-1 player forward',
            'line2-2 player forward'],

        })
        break;
      case '5-4-1':
        this.setState({
          displayFormation: ['line5-1 player defender',
            'line5-2 player defender',
            'line5-3 player defender',
            'line5-4 player defender',
            'line5-5 player defender',
            'line4-1 player midfielder',
            'line4-2 player midfielder',
            'line4-3 player midfielder',
            'line4-4 player midfielder',
            'line1-1 player forward'],
        })
        break;
      case '5-3-2':
        this.setState({
          displayFormation: ['line5-1 player defender',
            'line5-2 player defender',
            'line5-3 player defender',
            'line5-4 player defender',
            'line5-5 player defender',
            'line3-1 player midfielder',
            'line3-2 player midfielder',
            'line3-3 player midfielder',
            'line2-1 player forward',
            'line2-2 player forward'],

        })
        break;
      case '3-5-2':
        this.setState({
          displayFormation: ['line3-1 player defender',
            'line3-2 player defender',
            'line3-3 player defender',
            'line5-1 player midfielder',
            'line5-2 player midfielder',
            'line5-3 player midfielder',
            'line5-4 player midfielder',
            'line5-5 player midfielder',
            'line2-1 player forward',
            'line2-2 player forward'],

        })
        break;
      case '3-4-3':
        this.setState({
          displayFormation: ['line3-1 player defender',
            'line3-2 player defender',
            'line3-3 player defender',
            'line4-1 player midfielder',
            'line4-2 player midfielder',
            'line4-3 player midfielder',
            'line4-4 player midfielder',
            'line3-1 player forward',
            'line3-2 player forward',
            'line3-3 player forward'],
        })
        break;
      default:
        break;
    }
    this.getPlayers();


  }

  setTeam = async (e) => {
    const teamPicked = [...listTeams].find(t => t.teamName === e.target.value);
    console.log('teamPicked', teamPicked);

    await this.setState({ team: teamPicked.teamName, backgroundColor: teamPicked.color, idteam: teamPicked.id, badge:teamPicked.logo });


    this.getPlayers();
  }


  getPlayers = () => {
    // Filter through list of all players to get the players of the team who are not injured
    // const playersTeam = this.state.data.elements.filter(t => t.team === this.state.idteam && t.chance_of_playing_this_round === 100 && t.status === 'a');
    const playersTeam = this.state.data.elements.filter(t => t.team === this.state.idteam);
    // // // Get only the best goalkeeper
    const goalKeeperList = playersTeam.filter(t => t.element_type === 1);
    goalKeeperList.sort(function (a, b) { return parseFloat(b.now_cost) - parseFloat(a.now_cost) });
    const defenderList = playersTeam.filter(t => t.element_type === 2);
    defenderList.sort(function (a, b) { return parseFloat(b.now_cost) - parseFloat(a.now_cost) });
    const midfielderList = playersTeam.filter(t => t.element_type === 3);
    midfielderList.sort(function (a, b) { return parseFloat(b.now_cost) - parseFloat(a.now_cost) });
    const forwardList = playersTeam.filter(t => t.element_type === 4);
    forwardList.sort(function (a, b) { return parseFloat(b.now_cost) - parseFloat(a.now_cost) });
    // const goalKeeperValue = Math.max(...goalKeeperList.map(o => o.now_cost), 0);
    // const goalKeeper = goalKeeperList.find(t => t.now_cost === goalKeeperValue);
    console.log("players", playersTeam);
    // const goalKeeperN = goalKeeperList.web_name;

    // this.setState({goalKeeperName: goalKeeper.web_name});


    const displayUse = this.state.display;
    var playersTemp = [];
    switch (displayUse) {
      case '4-3-3':
        playersTemp = [goalKeeperList[0] ? [goalKeeperList[0].web_name, goalKeeperList[0].element_type] : '',
        defenderList[0] ? [defenderList[0].web_name, defenderList[0].element_type] : '',
        defenderList[1] ? [defenderList[1].web_name, defenderList[1].element_type] : '',
        defenderList[2] ? [defenderList[2].web_name, defenderList[2].element_type] : '',
        defenderList[3] ? [defenderList[3].web_name, defenderList[3].element_type] : '',
        midfielderList[0] ? [midfielderList[0].web_name, midfielderList[0].element_type] : '',
        midfielderList[1] ? [midfielderList[1].web_name, midfielderList[1].element_type] : '',
        midfielderList[2] ? [midfielderList[2].web_name, midfielderList[2].element_type] : '',
        forwardList[0] ? [forwardList[0].web_name, forwardList[0].element_type] : '',
        forwardList[1] ? [forwardList[1].web_name, forwardList[0].element_type] : '',
        forwardList[2] ? [forwardList[2].web_name, forwardList[0].element_type] : ''];
        break;
      case '4-3-2-1':
        playersTemp = [goalKeeperList[0] ? [goalKeeperList[0].web_name, goalKeeperList[0].element_type] : '',
        defenderList[0] ? [defenderList[0].web_name, defenderList[0].element_type] : '',
        defenderList[1] ? [defenderList[1].web_name, defenderList[1].element_type] : '',
        defenderList[2] ? [defenderList[2].web_name, defenderList[2].element_type] : '',
        defenderList[3] ? [defenderList[3].web_name, defenderList[3].element_type] : '',
        midfielderList[0] ? [midfielderList[0].web_name, midfielderList[0].element_type] : '',
        midfielderList[1] ? [midfielderList[1].web_name, midfielderList[1].element_type] : '',
        midfielderList[2] ? [midfielderList[2].web_name, midfielderList[2].element_type] : '',
        midfielderList[3] ? [midfielderList[3].web_name, midfielderList[3].element_type] : '',
        midfielderList[4] ? [midfielderList[4].web_name, midfielderList[4].element_type] : '',
        forwardList[0] ? [forwardList[0].web_name, forwardList[0].element_type] : ''];
        break;
      case '4-2-3-1':
        playersTemp = [goalKeeperList[0] ? [goalKeeperList[0].web_name, goalKeeperList[0].element_type] : '',
        defenderList[0] ? [defenderList[0].web_name, defenderList[0].element_type] : '',
        defenderList[1] ? [defenderList[1].web_name, defenderList[1].element_type] : '',
        defenderList[2] ? [defenderList[2].web_name, defenderList[2].element_type] : '',
        defenderList[3] ? [defenderList[3].web_name, defenderList[3].element_type] : '',
        midfielderList[0] ? [midfielderList[0].web_name, midfielderList[0].element_type] : '',
        midfielderList[1] ? [midfielderList[1].web_name, midfielderList[1].element_type] : '',
        midfielderList[2] ? [midfielderList[2].web_name, midfielderList[2].element_type] : '',
        midfielderList[3] ? [midfielderList[3].web_name, midfielderList[3].element_type] : '',
        midfielderList[4] ? [midfielderList[4].web_name, midfielderList[4].element_type] : '',
        forwardList[0] ? [forwardList[0].web_name, forwardList[0].element_type] : ''];
        break;
      case '4-4-2':
        playersTemp = [goalKeeperList[0] ? [goalKeeperList[0].web_name, goalKeeperList[0].element_type] : '',
        defenderList[0] ? [defenderList[0].web_name, defenderList[0].element_type] : '',
        defenderList[1] ? [defenderList[1].web_name, defenderList[1].element_type] : '',
        defenderList[2] ? [defenderList[2].web_name, defenderList[2].element_type] : '',
        defenderList[3] ? [defenderList[3].web_name, defenderList[3].element_type] : '',
        midfielderList[0] ? [midfielderList[0].web_name, midfielderList[0].element_type] : '',
        midfielderList[1] ? [midfielderList[1].web_name, midfielderList[1].element_type] : '',
        midfielderList[2] ? [midfielderList[2].web_name, midfielderList[2].element_type] : '',
        midfielderList[3] ? [midfielderList[3].web_name, midfielderList[3].element_type] : '',
        forwardList[0] ? [forwardList[0].web_name, forwardList[0].element_type] : '',
        forwardList[1] ? [forwardList[1].web_name, forwardList[0].element_type] : ''];
        break;
      case '5-4-1':
        playersTemp = [goalKeeperList[0] ? [goalKeeperList[0].web_name, goalKeeperList[0].element_type] : '',
        defenderList[0] ? [defenderList[0].web_name, defenderList[0].element_type] : '',
        defenderList[1] ? [defenderList[1].web_name, defenderList[1].element_type] : '',
        defenderList[2] ? [defenderList[2].web_name, defenderList[2].element_type] : '',
        defenderList[3] ? [defenderList[3].web_name, defenderList[3].element_type] : '',
        defenderList[4] ? [defenderList[4].web_name, defenderList[4].element_type] : '',
        midfielderList[0] ? [midfielderList[0].web_name, midfielderList[0].element_type] : '',
        midfielderList[1] ? [midfielderList[1].web_name, midfielderList[1].element_type] : '',
        midfielderList[2] ? [midfielderList[2].web_name, midfielderList[2].element_type] : '',
        midfielderList[3] ? [midfielderList[3].web_name, midfielderList[3].element_type] : '',
        forwardList[0] ? [forwardList[0].web_name, forwardList[0].element_type] : ''];
        break;
      case '5-3-2':
        playersTemp = [goalKeeperList[0] ? [goalKeeperList[0].web_name, goalKeeperList[0].element_type] : '',
        defenderList[0] ? [defenderList[0].web_name, defenderList[0].element_type] : '',
        defenderList[1] ? [defenderList[1].web_name, defenderList[1].element_type] : '',
        defenderList[2] ? [defenderList[2].web_name, defenderList[2].element_type] : '',
        defenderList[3] ? [defenderList[3].web_name, defenderList[3].element_type] : '',
        defenderList[4] ? [defenderList[4].web_name, defenderList[4].element_type] : '',
        midfielderList[0] ? [midfielderList[0].web_name, midfielderList[0].element_type] : '',
        midfielderList[1] ? [midfielderList[1].web_name, midfielderList[1].element_type] : '',
        midfielderList[2] ? [midfielderList[2].web_name, midfielderList[2].element_type] : '',
        forwardList[0] ? [forwardList[0].web_name, forwardList[0].element_type] : '',
        forwardList[1] ? [forwardList[1].web_name, forwardList[0].element_type] : ''];
        break;
      case '3-4-3':
        playersTemp = [goalKeeperList[0] ? [goalKeeperList[0].web_name, goalKeeperList[0].element_type] : '',
        defenderList[0] ? [defenderList[0].web_name, defenderList[0].element_type] : '',
        defenderList[1] ? [defenderList[1].web_name, defenderList[1].element_type] : '',
        defenderList[2] ? [defenderList[2].web_name, defenderList[2].element_type] : '',
        midfielderList[0] ? [midfielderList[0].web_name, midfielderList[0].element_type] : '',
        midfielderList[1] ? [midfielderList[1].web_name, midfielderList[1].element_type] : '',
        midfielderList[2] ? [midfielderList[2].web_name, midfielderList[2].element_type] : '',
        midfielderList[3] ? [midfielderList[3].web_name, midfielderList[3].element_type] : '',
        forwardList[0] ? [forwardList[0].web_name, forwardList[0].element_type] : '',
        forwardList[1] ? [forwardList[1].web_name, forwardList[0].element_type] : '',
        forwardList[2] ? [forwardList[2].web_name, forwardList[0].element_type] : ''];
        break;
      case '3-5-2':
        playersTemp = [goalKeeperList[0] ? [goalKeeperList[0].web_name, goalKeeperList[0].element_type] : '',
        defenderList[0] ? [defenderList[0].web_name, defenderList[0].element_type] : '',
        defenderList[1] ? [defenderList[1].web_name, defenderList[1].element_type] : '',
        defenderList[2] ? [defenderList[2].web_name, defenderList[2].element_type] : '',
        midfielderList[0] ? [midfielderList[0].web_name, midfielderList[0].element_type] : '',
        midfielderList[1] ? [midfielderList[1].web_name, midfielderList[1].element_type] : '',
        midfielderList[2] ? [midfielderList[2].web_name, midfielderList[2].element_type] : '',
        midfielderList[3] ? [midfielderList[3].web_name, midfielderList[3].element_type] : '',
        midfielderList[4] ? [midfielderList[4].web_name, midfielderList[4].element_type] : '',
        forwardList[0] ? [forwardList[0].web_name, forwardList[0].element_type] : '',
        forwardList[1] ? [forwardList[1].web_name, forwardList[0].element_type] : ''];
        break;
      default:
        break;
    }



    const bench = playersTeam.filter(t => !playersTemp.flat().includes(t.web_name));
    bench.sort(function (a, b) { return parseFloat(a.element_type) - parseFloat(b.element_type) });
    var benchnames = [];
    for (var i = 0; i < bench.length; i++) {
      benchnames.push(bench[i] ? [bench[i].web_name, bench[i].element_type] : '');
    }

    this.setState({ playersName: playersTemp, benchName: benchnames, visibilityStatus:'visible'});



  }




  render() {
    console.log('this.state', this.state);
    const { displayFormation, backgroundColor, playersName, benchName, team, badge, page, visibilityStatus } = this.state;



    switch (page) {
      case 'real':
        return (
          <>
            <Navbar realTeams={this.realTeams} yourTeam={this.yourTeam} />
            
            
            <div id='container'>
              <div id='leftSide'>
              <SelectTeam listTeams={listTeams} setTeam={this.setTeam} disabled={this.state.data.elements ? false : true} />
            <br />
            <SelectDisplay formation={formation} changeDisplay={this.changeDisplay} />
              <PlayersOnField  visibilityStatus={visibilityStatus} playersName={playersName} team={team} />
              </div>
              <div id='field'>
              
                <div id='goal' className='player'><i id='player goalKeeper' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='goalName'>{playersName[0][0]}</p></div>
                <div className={displayFormation[0]}><i id='player2' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='def1Name'>{playersName[1][0]}</p></div>
                <div className={displayFormation[1]}><i id='player3' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='def2Name'>{playersName[2][0]}</p></div>
                <div className={displayFormation[2]}><i id='player4' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='def3Name'>{playersName[3][0]}</p></div>
                <div className={displayFormation[3]}><i id='player5' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p  className='playerDisplay'id='def4Name'>{playersName[4][0]}</p></div>
                <div className={displayFormation[4]}><i id='player6' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p  className='playerDisplay'id='mid1Name'>{playersName[5][0]}</p></div>
                <div className={displayFormation[5]}><i id='player7' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p  className='playerDisplay'id='mid2Name'>{playersName[6][0]}</p></div>
                <div className={displayFormation[6]}><i id='player8' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p  className='playerDisplay'id='mid3Name'>{playersName[7][0]}</p></div>
                <div className={displayFormation[7]}><i id='player9' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p  className='playerDisplay'id='for1Name'>{playersName[8][0]}</p></div>
                <div className={displayFormation[8]}><i id='player10' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='for2Name'>{playersName[9][0]}</p></div>
                <div className={displayFormation[9]}><i id='player11' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='for3Name'>{playersName[10][0]}</p></div>
                <img id='badgeDisplay' src={badge} alt='badge'></img>
              </div>
              <div id='rightSide'>
             
              <PlayersOnBench visibilityStatus={visibilityStatus} id='playersOnBench1' benchName={benchName} />
              <button id='saveButton'>Save your team</button>
              </div>
            </div>
            <Footer />
          </>
    
        )
    
    case 'your':
      return (
        <>
          <Navbar realTeams={this.realTeams} yourTeam={this.yourTeam} />
          
          
          <div id='container'>
            <div id='leftSide'>
          <SelectDisplay formation={formation} changeDisplay={this.changeDisplay} />
            <YourTeam visibilityStatus={visibilityStatus} playersName={playersName} team={team} />
            </div>
            <div id='field'>
            
              <div id='goal' className='player'><i id='player goalKeeper' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='goalName'>{playersName[0][0]}</p></div>
              <div className={displayFormation[0]}><i id='player2' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='def1Name'>{playersName[1][0]}</p></div>
              <div className={displayFormation[1]}><i id='player3' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='def2Name'>{playersName[2][0]}</p></div>
              <div className={displayFormation[2]}><i id='player4' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='def3Name'>{playersName[3][0]}</p></div>
              <div className={displayFormation[3]}><i id='player5' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p  className='playerDisplay'id='def4Name'>{playersName[4][0]}</p></div>
              <div className={displayFormation[4]}><i id='player6' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p  className='playerDisplay'id='mid1Name'>{playersName[5][0]}</p></div>
              <div className={displayFormation[5]}><i id='player7' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p  className='playerDisplay'id='mid2Name'>{playersName[6][0]}</p></div>
              <div className={displayFormation[6]}><i id='player8' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p  className='playerDisplay'id='mid3Name'>{playersName[7][0]}</p></div>
              <div className={displayFormation[7]}><i id='player9' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p  className='playerDisplay'id='for1Name'>{playersName[8][0]}</p></div>
              <div className={displayFormation[8]}><i id='player10' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='for2Name'>{playersName[9][0]}</p></div>
              <div className={displayFormation[9]}><i id='player11' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='for3Name'>{playersName[10][0]}</p></div>
              <img id='badgeDisplay' src={badge} alt='badge'></img>
            </div>
            <div id='rightSide'>
           
            <PlayersOnBench visibilityStatus={visibilityStatus} id='playersOnBench1' benchName={benchName} />
            <button id='saveButton'>Save your team</button>
            </div>
          </div>
          <Footer />
        </>
  
      )
      
      default:
        break;
    }

 
  }

}

export default App;
