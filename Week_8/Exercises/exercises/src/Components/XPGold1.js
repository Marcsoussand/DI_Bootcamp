import React from 'react';
import './Ex5.css'


const mystyle = {
    color: 'white',
    backgroundColor: 'DodgerBlue',
    padding: '10px',
    fontFamily: 'Arial'
  }

  const mySuperStyles = {
      color: 'yellow',
      fontSize: '16px',
      fontWeight: 'bold',
      backgroundColor: 'black',
      padding: '5px',
      borderRadius: '8px',
      cursor: 'pointer',
      margin: '10px'
  }


class XPGold1 extends React.Component {
    render() {
        return (
            //Exercise 1
            // <div  style={{textAlign:"center"}}>
            //     <h1>This is a header</h1>
            //     <p>This is a paragraph</p>
            //     <a>This is a link</a>
            //     <h2>This is a form</h2>
            //     <p>Enter your name:</p>
            //     <p><input></input><button>Submit</button></p>
            //     <h4>Here is an image</h4>
            //     <img src="/react-logo.png"></img>
            //     <h4>This is a list</h4>
            //     <ul>
            //     <li>Coffee</li>
            //     <li>Tea</li>
            //     <li>Milk</li>
            //     </ul>
            // </div>

            //Exercise 2
            // <div style={{color:'red',backgroundColor:'lightblue'}}>
            //     <h1>Hello Style!</h1>
            // </div>

            //Exercise 3
         
            // <div style={mystyle}>
            //  <h1>Hello Style!</h1>
            // </div>

            //Exercise 4

            // <div>
            // <button style={mySuperStyles}>I'm a stylish button</button>
            // </div>

            //Exercise 5
            <div className='newStyle'>
                <h1>Hello Style!</h1>
            </div>


        )
    }
}




export default XPGold1;