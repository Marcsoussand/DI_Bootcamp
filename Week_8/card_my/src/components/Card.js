import React from 'react';
import './Card.css'

const Card = (props) => {
    const {id,name,email} = props;
    return(
        <React.Fragment>
        <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
            <img src={`https://robohash.org/${id}?size=200x200`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
        </React.Fragment>
    )
}

export default Card;