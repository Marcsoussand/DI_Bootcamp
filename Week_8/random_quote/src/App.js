import React from 'react';
import './App.css';
import quotes from './database';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author,
    };
  }
  randQuote = () => {
    const randQ = Math.floor(Math.random() * quotes.length);
    console.log(quotes[randQ]);
    return quotes[randQ];
    
  }

  setBg = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    document.getElementById("quoteButton").style.backgroundColor = "#" + randomColor;
    document.getElementById("quoteText").style.color = "#" + randomColor;
    document.getElementById("quoteAuthor").style.color = "#" + randomColor;
  }

  printQuote = () => {
    const launch = this.randQuote();
    console.log(launch);
    this.setState({quote:launch.quote,author:launch.author})
    console.log(this.state);
    this.setBg()
  }

  componentDidMount() {

  }

  render() {
    const {quote,author} = this.state; 
    console.log(quote);
    return (

      <>
        <div id="quoteBlock"><p id="quoteText">"{quote}"</p><p id="quoteAuthor">-{author}-</p>
<button id="quoteButton" onClick={this.printQuote} >New quote</button>
        </div>
      </>

    )
  }
}

export default App;
