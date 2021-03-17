import React from 'react';
import {useState,useEffect} from 'react';
// import './App.css';
import Counter from './components/Counter';

export const AppContext = React.createContext();



const App =() => {
// const [count,setCount] = useState(0);
// const [name,setName] = useState('');

// useEffect(()=>{
//   console.log('count',count);
// },[count])

// useEffect(()=>{
//   console.log('name',name);
// },[name])

  return (
<> 
<div>
  {/* <h1>You clicked {count} times</h1> */}
  {/* <AppContext.Provider value={{count,setCount, name, setName}}> */}
  <Counter />
  {/* </AppContext.Provider> */}
  
 
</div>


</>

  )


}


export default App;
