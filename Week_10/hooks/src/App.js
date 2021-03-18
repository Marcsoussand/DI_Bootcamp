import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      result: 0,
      op1: '',
      op2: '',
      operator: '',
      first: true,
    }
  }

  fillOp = (e) => {
    if (this.state.first) {
      let temp = this.state.op1 + e.currentTarget.value;
      this.setState({ op1: temp, result: temp })
      console.log('op1', this.state.op1);
      console.log('op2', this.state.op2);
      console.log('result', this.state.result);
    }
    else {
      let temp = this.state.op2 + e.currentTarget.value;
      this.setState({ op2: temp, result: temp })
      console.log('op1', this.state.op1);
      console.log('op2', this.state.op2);
      console.log('result', this.state.result);

    }
  }

  fillOperator = (e) => {
    if (this.state.first) {
      let temp = e.currentTarget.value;

      this.setState({ first: false, operator: temp })
    }
    else {
      this.setState({operator:e.currentTarget.value})
      { this.calculate(e) };
    }

  }

  calculate = (e) => {
    let operator1 = Number(this.state.op1);
    let operator2 = Number(this.state.op2);
    console.log("test: ", operator1);
    let switchOp = this.state.operator;
    console.log('switch', switchOp);
    switch (switchOp) {
      case '+':
        let tempResult = operator1 + operator2;
        this.setState({ result: tempResult, op2: '', op1: tempResult })
        break;
      case 'x':
        let tempResult2 = operator1 * operator2;
        this.setState({ result: tempResult2, op2: '', op1: tempResult2 });
        break;
        case '-' :
          let tempResult3 = operator1 - operator2;
        this.setState({ result: tempResult3, op2: '', op1: tempResult3 });
        break;
        case '/' :
          let tempResult4 = operator1 / operator2;
        this.setState({ result: tempResult4, op2: '', op1: tempResult4 });
        break;
      default:
        
        break;
    }
  }

  clearAll = () => {
    this.setState({result: 0,op1: '', op2: '', operator: '', first: true,})
  }

  render() {
    const { result, op1, op2, operator, first } = this.state;
    return (
      <>
        <div id='container'>
          <button id='screen'>{result}</button>
          <button id='ac' className='size' onClick={this.clearAll} >AC</button>
          <button id='divide' value='/' className='orange size' onClick={this.fillOperator}>/</button>
          <button id='multiply' value='x' className='orange size' onClick={this.fillOperator}>x</button>
          <button id='seven' value='7' className='number size' onClick={this.fillOp}>7</button>
          <button id='eight' value='8' className='number size' onClick={this.fillOp}>8</button>
          <button id='nine' value='9' className='number size' onClick={this.fillOp}>9</button>
          <button id='substract' value='-' className='orange size' onClick={this.fillOperator} >-</button>
          <button id='four' value='4' className='number size' onClick={this.fillOp}>4</button>
          <button id='five' value='5' className='number size' onClick={this.fillOp}>5</button>
          <button id='six' value='6' className='number size' onClick={this.fillOp}>6</button>
          <button id='add' value="+" className='orange size' onClick={this.fillOperator}>+</button>
          <button id='one' value='1' className='number size' onClick={this.fillOp}>1</button>
          <button id='two' value='2' className='number size' onClick={this.fillOp}>2</button>
          <button id='three' value='3' className='number size' onClick={this.fillOp}>3</button>
          <button id='equal' className='orange size' onClick={this.calculate}>=</button>
          <button id='zero' value='0' className='number size' onClick={this.fillOp}>0</button>
          <button id='dot' value='.' className='number size' onClick={this.fillOp}>.</button>

        </div>
      </>
    )
  }

}


export default App;
