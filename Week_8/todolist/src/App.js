import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList : ["Learn Javascript","Thanks Ziv"],
      element:'',
    };
  }
  refresh = (e) => {
    this.setState({
      element: e.target.value
    });
    e.target.placeholder = "Add a new todo: ";
  }


  update = () => {
    const todoL = [...this.state.todoList,this.state.element];
    console.log(todoL);
    this.setState({
      todoList: todoL,
      element: ''
    })
   }

  delete = (e) => {
    const idB = e.target.id;
    const cutID = idB.slice(7,idB.length)
    const todoL = this.state.todoList;
    todoL.splice(cutID,1);
    this.setState({todoList:todoL});

  }

  render(){

    const {todoList,element,id} = this.state;
  return (
   
    <>    <h1>"TODO'S"</h1>
<div id="container">{todoList.map((item,i) => {
  var deleteTemp = "delete"+i;
  var deleteTempB = "deleteB"+i;
  return <div id={deleteTemp} className='elementList' key={i}>{i+1} : {item} <button className="deleteButton" id={deleteTempB} onClick={this.delete}>Delete</button></div>})}
  <input id="todoInput" placeholder="Add a new todo: " onChange={this.refresh}></input>
<button id="addButton" onClick={this.update}>Add</button></div>



    </>
    
  )
}}

export default App;
