import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/CardList';
import 'tachyons';
import SearchBox from './components/SearchBox';



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      rb:[],
      searchText:'',
      textToSearch:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.setState({rb:data})
    })
    .catch(err =>{
      console.log(err);
    })
  }
  
handleSearch = (event) => {
  // console.log(event.target.value);
  this.setState({searchText:event.target.value})
  // this.state.searchText = event.target.value;
}

handleButtonSearch = (searchText) => {
  console.log('searchText',searchText);
  this.setState({textToSearch:searchText})
}

  render() {
    // console.log('3');
    const {rb,searchText,textToSearch} = this.state;
    console.log('searchText',searchText);

    const filterRobots = rb.filter(item => {
      return item.name.toLowerCase().includes(textToSearch.toLowerCase())
    })
    return (
      <>
     <SearchBox searchbut = {this.handleButtonSearch}/>
        <CardList robots = {filterRobots}/>

      </>
    );
  }


}

export default App;
