import React from 'react';

const Card = ({robot}) => {
  const {name,email,id,username} = robot;
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robot' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{username}</p>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
