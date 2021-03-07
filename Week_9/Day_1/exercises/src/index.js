import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import XP1_ex1 from './XP1_ex1';
import XP1_ex2 from './XP1_ex2';
import {BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
    <XP1_ex2 />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
