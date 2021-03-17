import React, { useState, useEffect, useContext } from 'react';


const Context = React.createContext();
export const GlobalContext = () => useContext(Context);

const AppContext = ({children}) => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('count', count);
    }, [count])

    useEffect(() => {
        console.log('name', name);
    }, [name])

    // const initialState = {
    //     count: 0
    // }
    
    // const reducer = (state,action) => {
    // switch (action.type) {
    //     case 'add':
            
    //         return {...state,count:state.count+2}
    //     case 'multiply' :
    //         return {...state,count:state.count*2}
    //         case 'divide':
    //             return {...state,count: action.payload}
    //     default:
    //         return {...state}
            
    // }
    // }

    return (
        <Context.Provider value={{count, setCount, name, setName}}>
           {children}
        </Context.Provider>
    )

}

export default AppContext;