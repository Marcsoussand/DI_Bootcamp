import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Language from './Components/Language';
// import { Button } from 'bootstrap';



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      languages: [{name:'PHP',votes:0},
      {name:'Python',votes:0},
      {name:'Javascript',votes:0},
      {name:'Java',votes:0}]
    }
  };

 

  chgVotes = (i) => {
      let temp_state = [...this.state];
      let temp_element = {...temp_state[i]};
      temp_element.votes=temp_element.votes+1;
      temp_state[i]=temp_element;
      this.setState(temp_state);}


  
render() {
  const {languages} = this.state;
  return (
    <>
    <h1>Vote your language</h1>
    <div>
      {languages.map( (item,index) => {
        console.log(item);
        return (
        <div className='langDiv' key={index}>
        <p>{item.votes}</p><p>{item.name}</p> <button type="button" onClick={() => item.chgVotes(index)}>Click Here</button>
        </div> 
        )
        
        
        // <Language langdata={item} key={i} />

      })}
    </div>
  
  
  
  
  </>
  )
}
}

export default App;
