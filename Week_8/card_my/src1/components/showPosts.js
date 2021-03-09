import React from 'react';

const showPosts = ({robot}) => {
    const {name,email,id,username} = robot;
    const posts = []


    fetch(`http://jsonplaceholder.typicode.com/posts?userid=${id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      posts = data;
    })
    .catch(err =>{
      console.log(err);
    })
    return (
        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
            {posts.map((item, i) => {
        return <div></div>
      })}
      </div>
          
      );
    }