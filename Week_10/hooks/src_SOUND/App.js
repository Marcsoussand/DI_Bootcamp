import React from 'react';
import Counter from './components/Counter';
import './App.css';

import click1 from './click1.wav';
import click2 from './click2.wav';


class App extends React.Component {
constructor () {
  super();
  this.state = {
    bpm: 100,
    playing: false,
    count: 0,
    beats:4
  }
  this.click1 = new Audio(click1)
  this.click2 = new Audio(click2)
}


handleBpmChange = (e) => {
  const bpm = e.target.value;
  if(this.state.playing){clearInterval(this.timer)
    this.timer = setInterval(this.playClick, (60/this.state.bpm)*1000);
    this.setState({playing:true,count:0}, this.playClick)
  }
  
  this.setState({bpm})
}

playClick = () => {
  const {count,beats} = this.state;
  if (count % beats === 0) {
    this.click2.play();
  }
  else {
    this.click1.play();
  }

  this.setState({count:this.state.count+1})
}

startStop = () => {
  if(this.state.playing) {
  clearInterval(this.timer)
    this.setState({playing:false})
  }
  else {
  this.timer = setInterval(this.playClick, (60/this.state.bpm)*1000);
  this.setState({playing:true,count:0}, this.playClick)}
}


  render() {

    const {bpm, playing} = this.state;
    return (
      <>
        <div id='container'>
          <div>

            <div>{bpm} BPM</div>
            <input class='bpm-slider' type='range' min='60' max='240' value={bpm} 
            onChange={this.handleBpmChange}/>

          </div>

          <button id='start'onClick={this.startStop}>{playing ? 'Stop': 'Start'}</button>
        </div>
      </>
    )
  }

}


export default App;
