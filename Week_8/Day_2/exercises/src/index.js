import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PropTypes from 'prop-types';


const PrintHello = () => {
  return <h1>I Love React</h1>;
}
const PrintHello2 = () => {
  return <h1>I'm a React Component</h1>;
}

const BootstrapCard = () => {
  return <div className="card m-5" style={{ width: '30rem' }}>
    <img className="card-img-top" src="https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/" alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Bob Dylan</h5>
      <p className="card-text">Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.</p>
      <a href="https://en.wikipedia.org/wiki/Bob_Dylan" className="btn btn-primary">Go to wikipedia</a>
    </div>
  </div>
}

const BootstrapCard2 = (props) => {
  return <div className="card m-5" style={{ width: '30rem' }}>
    <img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.description}</p>
      <a href={props.buttonUrl} className="btn btn-primary">{props.buttonLabel}</a>
    </div>
  </div>
}

BootstrapCard2.propTypes = {
  title: PropTypes.string
};

const Jumbotron = (props) => {
  return <div class="jumbotron m-5">
  <h1 class="display-4">{props.title}</h1>
  <p class="lead">{props.description}</p>
  <a class="btn btn-primary btn-lg" href={props.buttonURL} role="button">{props.buttonLabel}</a>
</div>
}


ReactDOM.render(
  //Exercise 1
  //  PrintHello(),

  //Exercise 2
  //<PrintHello2 />,

  //Exercise 3
  //  <BootstrapCard />, 

  //Exercise 4
  // <BootstrapCard2 title="Paul Mccartney"
  //   imageUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg'
  //   buttonLabel='Go to Wikipedia'
  //   buttonUrl='https://en.wikipedia.org/wiki/Paul_McCartney'
  //   description='Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter, musician, composer, and record and film producer who gained worldwide fame as co-lead vocalist and bassist for the Beatles.'
  // />,

  //Exercise 5
//   <Jumbotron
//     title="Welcome to react"
//     description="React is the most popular rendering library in the world"
//     buttonLabel="Go to the official website"
//     buttonURL="https://reactjs.org/"
// />,

//Daily Challenge
<React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
