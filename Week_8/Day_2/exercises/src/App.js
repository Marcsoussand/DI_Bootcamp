import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Language from './Components/Language';
// import { Button } from 'bootstrap';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      languages: [{name:'PHP',votes:0},
      {name:'Python',votes:0},
      {name:'Javascript',votes:0},
      {name:'Java',votes:0}]
    }
  };

 

  chgVotes = (i) => {
      let temp_languages = [...this.state.languages];
     temp_languages[i].votes++;
     this.setState({languages:temp_languages});
  }


  
render() {
  return (
    <>
    <h1>Vote your language</h1>
    <div>
      {this.state.languages.map( (item,index) => {
        // console.log(item);
        return (
        <div className='langDiv' key={index}>
        <p>{item.votes}</p><p>{item.name}</p> <button type="button" onClick={this.chgVotes.bind(this,index)}>Click Here</button>
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
