import React from 'react';

const object = {
    first_name: 'Bob',
    last_name: 'Dylan'
};

const data = {
    image: "https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/",
    cardTitle: "Bob Dylan",
    cardDescription: "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
    button: {
        url: "https://en.wikipedia.org/wiki/Bob_Dylan",
        label: "Go to wikipedia"
    }
};

const navlinkItems = ["www.google.com", "www.facebook.com", "www.amazon.com"];

const animals = ['Horse', 'Turtle', 'Elephan', 'Monkey'];

const animals2 = [ { label: 'Horse' }, { label: 'Turtle' }, { label: 'Elephan' }, { label: 'Monkey' } ];

const planets = [ 'Mars', 'Venus', 'Jupiter', 'Earth', 'Saturn', 'Neptune' ];

class XPGold2 extends React.Component {
    render() {
        return (

            // Exercise 1
            //             <div>
            // <h1>My name is {object.first_name}</h1>
            // <h2>My last name is {object.last_name}</h2>
            // </div>

            //Exercise 2
            // <div class="card m-5" style={{ width: '30rem' }}>
            //     <img class="card-img-top" src={data.image} alt="Card image cap" />
            //     <div class="card-body">
            //         <h5 class="card-title">{data.cardTitle}</h5>
            //         <p class="card-text">{data.cardDescription}</p>
            //         <a href={data.button.url} class="btn btn-primary">{data.button.label}</a>
            //     </div>
            // </div>

            //Exercise 3
            // <div>
            //     <ul className='nav'>
            //         <li class="nav-item">
            //             <a class="nav-link" href={navlinkItems[0]}> Link to google.com</a>
            //         </li>
            //         <li class="nav-item">
            //             <a class="nav-link" href={navlinkItems[1]}>Link to facebook.com</a>
            //         </li>
            //         <li class="nav-item">
            //             <a class="nav-link" href={navlinkItems[2]}>Link to amazon.com</a>
            //         </li>
            //     </ul>
            // </div>

            //Exercise 4
            // <div>
            //     <ul>
            //         {animals.map(item => (
            //             <li>{item}</li>
            //         )
            //         )}
            //     </ul>
            // </div>

            //Exercise 5
            // <div>
            //      <ul>
            //          {animals2.map(item => (
            //             <li>{item.label}</li>
            //         )
            //         )}
            //     </ul>
            // </div>

            //Exercise 6
            <div>
                <ul className="list-group">
                {planets.map(item => (
                        <li className="list-group-item">{item}</li>
                    )
                    )}
                </ul>
            </div>
        )
    }
}

export default XPGold2;