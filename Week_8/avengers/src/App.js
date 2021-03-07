import React from 'react';
import './App.css';
import avengers from './Cards';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      avengers,
      score:0,
      topscore:0,
    };
  }

  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};
  render(){
   const {avengers, score, topscore} = this.state;
  return (
  
<>

<div>Avengers Memory Game</div>
<div id='container'>{avengers.map((item,i) => {
return <div className='avg'><img src={item.image} ></img><p>Name: {item.name}</p><p>Occupation: {item.occupation}</p>

</div>

})}
  </div>



</>

  )
  }
}

export default App;
