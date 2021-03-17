import React from 'react';
import './App.css';
import Header from './components/Header';
import Books from './components/Books';


class App extends React.Component {


  
  render() {

    return (
      <>
      <Header />
      <Books/>
      <div>
        Coucou
      </div>
      </>
    )
  }
}

export default App