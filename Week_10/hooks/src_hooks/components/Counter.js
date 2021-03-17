import React, { useContext,useEffect,useReducer,useRef } from 'react';
// import { AppContext } from '../App';
import {GlobalContext} from '../AppContext';

const initialState = {
    count: 0
}

const reducer = (state,action) => {
switch (action.type) {
    case 'add':
        
        return {...state,count:state.count+2}
    case 'multiply' :
        return {...state,count:state.count*2}
        case 'divide':
            return {...state,count: action.payload}
    default:
        return {...state}
        
}
}



const Counter = () => {
    const {count, setCount, name, setName,initialState, reducer} = GlobalContext();
    // const {count, setCount, name, setName} = useContext(AppContext)

const [state,dispatch] = useReducer(reducer,initialState)

const refDiv=useRef('');
useEffect(()=> {
    console.log('refDiv',refDiv);
    refDiv.style.color= 'red';
},[count])

    return (
        <div ref={refDiv}>
            <h1>You clicked {count} times</h1>
            
  <button onClick={() =>setCount(count+1)}>Click</button>
  <h1>Your name is: {name}</h1>
  <input type='text' onChange={(e) => setName(e.target.value)}/>
       <hr/>
       <h1>Result: {state.count}</h1>
       <button onClick={()=>dispatch({type:'add'})}>Add 2</button>
       <button onClick={()=>dispatch({type:'multiply'})}>Multiply by 2</button>
       <button onClick={()=>dispatch({type:'divide',payload:state.count/2})}>Divide by 2</button>
       
       
        </div>

    )

}

export default Counter;