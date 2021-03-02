import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  //Exercise 1 + 2
  constructor(){
    super();
    this.state = {
      color:'red',
    }
  }
changeBlue = () =>{
  this.setState({color:'blue'})
}

shouldComponentUpdate(){
  return false;
}

  componentDidMount() {
const timer = setTimeout(() => {
  this.setState({color:'yellow'});
}, 5000);
  }

  render(){

const {color} = this.state;
return (
  <>
    <h1>My favourite colour is {color}</h1>
    <button onClick={this.changeBlue}>Change color to blue</button>
    </>
)
  }
}

export default App;
