import React from 'react';
import blog from './blog.png';
import {connect} from 'react-redux';
import { Link, NavLink } from 'react-router-dom';


class Home extends React.Component {

    
    render() {
        console.log(this.props);
        const {posts} = this.props;

        const post = posts.length ? (posts.map(post => {
    return (
   
        <>
<div className='post card' key={post.id}>
<img src={blog}></img>
<div className='card-content'>
<Link to={'/' + post.id}>
<span className='card-title red-text'>{post.title}</span>
</Link>
<p>{post.body}</p>
</div>
</div>



        




        </>
    )
}))
: 
(
    <div className="center">No posts to show</div>
  );
  return (
   
    <div className='container home'>
    <h1>Home</h1><img src={blog}></img>
    {post}
    </div>
)
}
}

const mapStateToProps = (state) => {
    return {
    posts: state.posts
    }
}

export default connect(mapStateToProps,null)(Home)
