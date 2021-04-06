import React, { useState } from 'react';
var playersTemp2 = [];

class YourTeam extends React.Component {
    constructor(props) {
        super(props);
        this.setPlayer = this.setPlayer.bind(this);}
        // this.nameInput = this.nameInput.bind(this);

        // let {playersName} = props;
        // var position = '';
        // var playersTemp2 = [];

        // nameInput = (i) => {
        //     return ("input" + i)
        // }

        setPlayer(){
            this.props.setPlayerNames(playersTemp2);
        }

render () {

        // setPlayer = () => {
        //     this.props.playersName = playersTemp2;
        // }
        var playersTemp2 = [];
        const playersName = this.props.playersName;

        return (
            <>

                <ul style={{ visibility: 'visible' }} id='playersOnField1'>
                    <h3 style={{ textAlign: "center", color: "gold" }} >Players </h3>
                    {playersName.map((item, i) => {
                        // switch (item[1]) {
                        //     case 1:
                        //         position = 'G'
                        //         break;
                        //     case 2:
                        //         position = 'D';
                        //         break;
                        //     case 3:
                        //         position = 'M';
                        //         break;
                        //     case 4:
                        //         position = 'F';
                        //         break;
                        //     default:
                        //         break;
                        // };

                        playersTemp2.push(item);
                        return <li key={i} className='playerListDesign'><div>Player {i + 1}</div><input type="text" className='inputPlayers'  onChange={event => { playersTemp2[i] = event.target.value; this.setPlayer(); console.log(playersTemp2);}} /> </li>
                    })}
                </ul>
            </>
        )

    }
}

export default YourTeam

// id={nameInput(i)}