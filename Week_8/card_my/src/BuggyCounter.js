import React from 'react';

class BuggyCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  handleClick(newCounter) {
    this.setState({counter: ++newCounter});
  }

  render() {
    const {counter} = this.state;
    console.log('counter',counter);
    if (this.state.counter === 5) {
      // Simulate a JS error
      throw new Error('I crashed!');
    }
    return <h1 onClick={()=> this.handleClick(counter)}>{this.state.counter}</h1>;
  }
}
export default BuggyCounter
