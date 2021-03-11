import React from 'react';
import blog from './blog.png'
import { connect } from 'react-redux';
import {deletePost} from './Postactions';

class Post extends React.Component {

    handleClick = () => {
        this.props.deletePost(this.props.post.id)
        this.props.history.push('/');
    }


    render() {
console.log(this.props);
        const post = this.props.post ?
            <div className='post'>
                <h2 className='center'>{this.props.post.title}</h2>
                <p>{this.props.post.body}</p>
                <div className='center'>
                    <button className='btn grey' onClick={this.handleClick}>Delete Post</button>
                </div>
            </div>
            :
            <div className='center'>Loading...</div>
        return (
            <div>
                {post}
            </div>

        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => dispatch(deletePost(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Post)
