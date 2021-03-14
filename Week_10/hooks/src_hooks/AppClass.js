import React from 'react';
import './App.css';

class AppClass extends React.Component {
constructor () {
  super();

  this.state= {
    count:0,
  }
}

componentDidMount () {
  console.log('componentdidMount', this.state.count);
}

componentDidUpdate() {
  console.log('componentdidUpdate', this.state.count);
}

  render () {


  return (
<>
<div>
  <h1>You clicked {this.state.count} times</h1>
  <button onClick={() =>this.setState({count:this.state.count+1})}>Click</button>
</div>

</>

  )


}
}

export default AppClass;
