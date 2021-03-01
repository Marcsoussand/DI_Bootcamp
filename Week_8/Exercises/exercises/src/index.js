import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import XPGold1 from './Components/XPGold1';
import XPGold2 from './Components/XPGold2';
import DemoCarousel from './Components/DemoCarousel';
import App from './App';
import reportWebVitals from './reportWebVitals';


// TO BE ACTIVATED FOR EXERCISES XP FROM MYELEMENT2 TO MYELEMENT8:
// const myelement2 = <h1>I Love JSX!</h1>;
// const myelement3 = React.createElement('h1', {}, 'I do not use JSX!');
// const myelement4 = <h1>React is {5 + 5} times better with JSX</h1>;
// const myelement5 = (
//   <ul>
//     <li>Apples</li>
//     <li>Bananas</li>
//     <li>Cherries</li>
//   </ul>
// );
// const myelement6 = (
//   <div>
//     <h1>I am a Header.</h1>
//     <h1>I am a Header too.</h1>
//   </div>
// );
// const myelement7 = <input type="text" />;
// const name = "John";
// const age = 12;
// const myelement8 = <p><b>{name}</b> is <b>{age}</b> years old </p>;



ReactDOM.render(
  // Exercise 1
  // <h1>Hello World</h1>,

  // Exercise 2
  // myelement2,

  // Exercise 3
  // myelement3,

  // Exercise 4
  // myelement4,

  // Exercise 5
  // myelement5,

  // Exercise 6
  // myelement6,

  // Exercise 7
  // myelement7,

  // Exercise 8
  // myelement8,

  //Exercise XP Gold #1
  // <XPGold1 />,

  //Exercise XP Gold #2
  // <XPGold2 />,

  //Daily Challenge
  <DemoCarousel />,



document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


