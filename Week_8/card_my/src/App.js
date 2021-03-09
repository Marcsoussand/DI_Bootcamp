import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import 'tachyons';
import {connect} from 'react-redux';
import {setRobots,setAsyncRobots} from './redux/actions';


class App extends React.Component {
  constructor(){
    super();
    // this.state = {
    //   rb:[],
    //   // searchText: '',
    // }
  }

  componentDidMount(){
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(res => res.json())
    // .then(data => {
    //   // this.setState({rb:data})
    //   this.props.setRobots(data)
    // })
    // .catch(err =>{
    //   console.log(err);
    // })
    this.props.getRobots()
  }

  // handleSearch = (event) => {
  //   this.setState({searchText:event.target.value});
  // }

  render() {
    // const {rb} = this.state;
    const {searchText,rb} = this.props;

    const filterRobots = rb.filter( item => {
      return item.name.toLowerCase().includes(searchText.toLowerCase())
    })

    return (
          <>
            <SearchBox />
            <CardList robots = {filterRobots}/>
          </>
        )
  }
}

const mapStateToProps = (state) => {
  return{
    searchText: state.searchText,
    rb: state.rb
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // setRobots: (arr) => dispatch(setRobots(arr))
    getRobots: () => dispatch(setAsyncRobots())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
