import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PostItem extends Component {
    deletePost(evt) {
        evt.preventDefault();
    }
    
    render() {
        const { post } = this.props;
        return (
            <div className="post">
                <h2>
                    <Link to={"/blog/" + post._id}>{post.title}</Link>
                </h2>
                <p>{post.content}</p>
                <p>
                    <small>
                        By: {post.author}, 
                        on {new Date(post.created).toLocaleDateString()}
                        —
                        <a href="hello" onClick={this.deletePost}>Eliminar</a>
                    </small>
                </p>
                <hr/>
            </div>
        );
    }
}