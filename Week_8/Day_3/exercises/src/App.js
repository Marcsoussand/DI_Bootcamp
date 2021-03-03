import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  //Exercise XP #1 - React Lifecycle
  //   constructor(){
  //     super();
  //     this.state = {
  //       color:'red',
  //     }
  //   }
  // changeBlue = () =>{
  //   this.setState({color:'blue'})
  // }

  // shouldComponentUpdate(){
  //   return false;
  // }

  //   componentDidMount() {
  // const timer = setTimeout(() => {
  //   this.setState({color:'yellow'});
  // }, 5000);
  //   }

  //   render(){

  // const {color} = this.state;
  // return (
  //   <>
  //     <h1>My favourite colour is {color}</h1>
  //     <button onClick={this.changeBlue}>Change color to blue</button>
  //     </>
  // )
  //   }

  //Exercise XP #2 - React Lifecycle 
  //I did not succeed to stop the update things, is not working
  //Error: Maximum update depth exceeded
  //   constructor() {
  //     super();
  //     this.state = {
  //       color: 'red',
  //       addText: '',
  //     }
  //   }
  //   changeBlue = () => {
  //     this.setState({ color: 'blue' })
  //   }

  //   componentDidUpdate(prevProps, prevState) {
  //     if (prevProps.color !== this.state.color) {
  //       return this.setState({ addText: 'The updated favorite is yellow' });
  //     }
  //   }
  //   // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   //   if (prevProps.addText == '') {
  //   //   return this.setState({ addText: 'Before the update, the favorite was red' });
  //   //   }
  //   // }

  //   componentDidMount() {
  //     const timer = setTimeout(() => {
  //       this.setState({ color: 'yellow' });
  //     }, 5000);
  //   }

  //   render() {

  //     const { color, addText } = this.state;
  //     return (
  //       <>
  //         <h1>My favourite colour is {color}</h1>
  //         <button onClick={this.changeBlue}>Change color to blue</button>
  //         <div>{addText}</div>
  //       </>
  //     )
  //   }


  //Exercise XP #3 - React Events

  constructor() {
    super();
    this.state = {
      // shot: "",
    }
  }

    greatShot = () => {
      
      alert('Great Shot !')
    }

    shoot = ()=> {
      alert('Nice Shot!')
    }

    shoot2 = ()=> {
      alert(this)
    }

    shoot3 = ()=> {
      alert(this)
    }

    componentDidMount() {
    }

    render(){
      // const { shot } = this.state;

      return (

        <>
          <div>Exercise 1</div>
          <button onClick={this.greatShot}>Take the shot</button>
          <div>Exercise 2</div>
          <button onClick={this.shoot}>Shoot Again</button>
          <div>Exercise 3</div>
          <button onClick={this.shoot2}>Keep shooting</button>
          <div>Exercise 4</div>
          <button onClick={this.shoot3}>Keep shooting</button>
          
        </>
      )
    }

  }
  export default App;
