import React from 'react';
import logo from './logo.svg';
import './App.css';
import baseRequest from './requests/baseRequest';
import getPlayer from './requests/getPlayer';

class App extends React.Component {
constructor (){
  super();
  this.state = {
    id,
    second_name,
  }

}
  

  render() {
  const  {id,second_name} = this.state;
    console.log(getPlayer(120))
  return (
<>
<p>{id}</p>
<p>{second_name}</p>
</>
    
  )}

}

export default App;
