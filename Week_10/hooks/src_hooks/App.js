import React from 'react';
import {useState,useEffect} from 'react';
import './App.css';

const App =() => {
const [count,setCount] = useState(0);
const [name,setName] = useState('');

useEffect(()=>{
  console.log('count',count);
},[count])

useEffect(()=>{
  console.log('name',name);
},[name])

  return (
<>
<div>
  <h1>You clicked {count} times</h1>
  <button onClick={() =>setCount(count+1)}>Click</button>
  <h1>Your name is: {name}</h1>
  <input type='text' onChange={(e) => setName(e.target.value)}/>
</div>

</>

  )


}


export default App;
