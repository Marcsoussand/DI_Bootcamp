import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/CardList';
import 'tachyons';
import SearchBox from './components/SearchBox';





class App extends React.Component {
  constructor() {
    super();
    this.state = {
      rb: [],
      searchText: '',
      textToSearch: '',
      posts: [],
      page: 'home',
    }
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
      })
  }

  handleSearch = (event) => {
    // console.log(event.target.value);
    this.setState({ searchText: event.target.value })
    // this.state.searchText = event.target.value;
  }

  handleButtonSearch = (searchText) => {
    console.log('searchText', searchText);
    this.setState({ textToSearch: searchText })
  }

  goHome = () => {
    this.setState({ page: 'home' });
  }

  getPosts = (user_id) => {
    console.log('get post', user_id);
    fetch(`http://jsonplaceholder.typicode.com/posts?userId=${user_id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ posts: data, page: 'posts' })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    // console.log('3');
    const { rb, searchText, textToSearch, posts, page } = this.state;
    console.log('searchText', searchText);

    const filterRobots = rb.filter(item => {
      return item.name.toLowerCase().includes(textToSearch.toLowerCase())
    })

    switch (page) {
      case 'home':
        return (
          <>
            <SearchBox searchbut={this.handleButtonSearch} />
            <CardList robots={filterRobots} getPosts={this.getPosts} />
          </>
        )
        break;
      case 'posts':
        return (
          <>
            <button onClick={this.goHome}>Go Home</button>
            {posts.map((item, i) => {
              return (<div className='tc grow bg-light-green br3 pa3 ma2' key={i}>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </div>)
            }
            )}
          </>
          )
        break;

      default:
        return (
          <>
            <SearchBox searchbut={this.handleButtonSearch} />
            <CardList robots={filterRobots} getPosts={this.getPosts} />
          </>
        )
        break;
    }
  }


}

export default App;
