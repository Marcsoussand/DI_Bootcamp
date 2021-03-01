import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Card from './components/Card';
import CardList from './components/CardList';
// import 'tachyons';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      rb: []
    }
    console.log('1');
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ rb: data })
      })
      .catch(err => {
        console.log(err);
      }
      )
  }

  render() {
    const { rb } = this.state;
    // console.log('3');
    // const robots = [
    //   { id: 1, name: 'Leanne Graham', email: 'Leanne@gmail.com' },
    //   { id: 2, name: 'Ervin Howell', email: 'Ervin@gmail.com' },
    //   { id: 3, name: 'Clementine Bauch', email: 'Clementine@gmail.com' },
    //   { id: 4, name: 'Zivuch Bauch', email: 'Zivuch@gmail.com' },
    // ]
    return (
      <>
        <CardList robots = {rb} />
      </>
    );
  }
}

export default App;
