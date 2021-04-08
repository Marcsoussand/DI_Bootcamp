import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
// import thunk from 'redux-thunk'
import ErrorBoundary from './components/ErrorBoundary';
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';

// import {reducer} from './Redux/reducer';


// const store = createStore(reducer,applyMiddleware(thunk))


ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <ErrorBoundary>
      <BrowserRouter>
      <App />
      </BrowserRouter>
      </ErrorBoundary>
      {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
