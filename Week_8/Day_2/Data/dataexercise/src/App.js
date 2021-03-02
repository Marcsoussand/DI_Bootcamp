import React from 'react';
import Customer from './components/Customer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      customers: [],
      textToSearch:'',
    }

  }

  componentDidMount() {
    fetch('http://localhost:9000/getAllCustomers')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({customers:data})

      })
      .catch(err => {
        console.log(err);
      })
  }

  handleSearch = (event) => {
    console.log(event.target.value);
    this.setState({textToSearch:event.target.value})
    // this.state.searchText = event.target.value;
  }

 
  render() {
    const { customers,textToSearch } = this.state;

    const filterCustomers = customers.filter(item => {
      return item.country.toLowerCase().includes(textToSearch.toLowerCase())
    })
    return (
      // filterCustomers(customers),
      <>
      <input type="text" onChange={this.handleSearch}></input>
      
      <Table striped bordered hover size='sm'>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((item, i) => {
            return <Customer  custdata={item} key={i} />

          })
          }
        </tbody>
      </Table >
      </>
    )
  }

}

export default App;
