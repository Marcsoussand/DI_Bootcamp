import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './App.css'

import Counter from './components/Counter'
import counterReducer from './reducers/counterReducer'

const store = createStore(counterReducer)

function App() {
  return (
    <Provider store={store}>    
      <Counter />
    </Provider>
  );
}

export default App;

