import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PostItem from "./item";

export default class BlogIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    async componentDidMount() {
        const payload = await fetch('http://localhost:1337/posts', { method: 'GET' }).then(async (response) => {
            return await response.json();
        }).catch((error) => {
            console.warn('Error when fetching', error);
            return null;
        });
        if (payload) {
            const { posts } = payload.data;
            this.setState({ posts });
        }
    }

    render() {
        const {posts} = this.state;
        return (
            <div>
                <h1 className="homepage-h1">
                    Blog
                </h1>
                <p>
                    <Link to="/posts/new">Nuevo Post</Link>
                </p>
                <div className="posts-list">
                    {posts.map((post, i) => <PostItem post={post} key={`post-${i}`} />)}
                </div>
            </div>
        );
    }
}
