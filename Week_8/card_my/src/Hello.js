import React from 'react';

const Hello = (props) => {
  const {username,email} = props
  return (
    <>
      <div>
        Hello, {username}
      </div>
      <div>
        Your email is {email}
      </div>
    </>
  )
}

export default Hello;
