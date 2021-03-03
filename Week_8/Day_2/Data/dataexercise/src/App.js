import React from 'react';
import Customer from './components/Customer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      customers: [],
      offset:0,
      count:0,
    }

  }

  componentDidMount() {
    fetch(`http://localhost:9000/getCountCustomers`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.setState({count:data[0].count})
      this.getCustomers();

    })
    .catch(err => {
      console.log(err);
    })
  }

[
  {count:0}
]

  getCustomers = (next = 0 ) =>{
    this.setState({offset:next})
    fetch(`http://localhost:9000/getAllCustomers?offset=${next}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.setState({customers:data})

    })
    .catch(err => {
      console.log(err);
    })

  }


  searchCustomer = (e) => {
    // console.log(e.target.value);
    const query = e.target.value;
    fetch(`http://localhost:9000/search?q=${query}`)
    .then(res => res.json())
    .then(data => {
      this.setState({customers:data})
    })
    .catch(err => {
      console.log(err);
    })
  }
 
  render() {
    const { customers, offset, count } = this.state;

    const nextOffset = offset +15;
    const prevOffset = offset-15;
    const prevDisable = (offset<=0) ? 'disabled' : '';
    const nextDisable = (offset>count-15) ?'disabled' : '';
console.log("count:"+count);
    return (
      <>
      <Form>
        
      <Form.Control type="search" 
      style={{width:'350px',marginTop:'5px',marginBottom:'5px'}}
      placeholder="Search Customer by country" 
      onChange={this.searchCustomer}/>
      </Form>

      <Form>
        <Button variant="primary" disabled={prevDisable}
        onClick= {()=> this.getCustomers(prevOffset)}
        >Prev</Button>
        <Button variant="secondary" disabled={nextDisable}
        onClick= {()=> this.getCustomers(nextOffset)}
        >Next</Button>
        </Form>
     
      
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
