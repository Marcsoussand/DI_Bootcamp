import React from 'react';

const Card = ({robot,getPosts}) => {
  const {name,email,id,username} = robot;


  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robot' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{username}</p>
        <p>{email}</p>
        <button className='tc grow bg-light-green br3 pa3' 
        onClick={() => getPosts(id)}>Show Posts</button>
      </div>
    </div>
  );
}

export default Card;
