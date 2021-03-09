import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as contactAction from './actions/contactAction';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: '',
    }
  }

  handleChange = (event) => {
      this.setState({name:event.target.value});
    }

    handleSubmit(e){
      e.preventDefault();
      let contact = {
        name: this.state.name
      }
      this.setState({
        name: ''
      });
      this.props.createContact(contact);
    }
  

    listView(data, index){
      return (
        <div className="row">
          <div className="col-md-10">
            <li key={index} className="list-group-item clearfix">
              {data.name}
            </li>
          </div>
          <div className="col-md-2">
            <button onClick={(e) => this.deleteContact(e, index)} className="btn btn-danger">
              Remove
            </button>
          </div>
      </div> 
      )
    }

    deleteContact(e, index){
      e.preventDefault();
      this.props.deleteContact(index);
    }

  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <h1>Clientside Contacts Application</h1>
        <p>Add Contact Form </p>
        <input type='text' onChange={this.handleChange} value={this.state.name}></input>
        <input type="submit" className="btn btn-danger" value="ADD" />
      </form>
      <div>
       {<ul>
       {this.props.contacts.map((contact, i) => this.listView(contact, i))}
     </ul>} 
     </div>
     </>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: contact => dispatch(contactAction.createContact(contact)),
    deleteContact: index =>dispatch(contactAction.deleteContact(index))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


