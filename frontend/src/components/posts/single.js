import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

const SinglePost = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        fetch(
            `http://localhost:1337/posts/${postId}`,
            { method: 'GET' }
        ).then(async (response) => {
            const { data } = await response.json();
            console.log(data);
            setPost(data);
        }).catch((error) => {
            console.warn('Error when fetching', error);
        });
    }, []);
    const navigate = useNavigate();
    const deletePost = (evt) => {
        evt.preventDefault();
        console.log('Sending deletion request', `http://localhost:1337/posts/${postId}`);
        fetch(
            `http://localhost:1337/posts/${postId}`,
            { method: 'DELETE' }
        ).then(async (response) => {
            const { success } = await response.json();
            if (success) {
                navigate('/blog/', { replace: true });
            }
        }).catch((error) => {
            console.error('Error when deleting post', error);
        })
    };
    if (post && post.title) {
        return (
            <div className='narrow-page'>
                <h1>{post.title}</h1>
                <p>
                    {post.content}
                </p>
                <p>
                    <small>
                        By: {post.author}, 
                        on {new Date(post.created).toLocaleDateString()}
                        —
                        <a href="#" onClick={deletePost}>Eliminar</a>
                    </small>
                </p>
            </div>
        );
    } else {
        return <div>Loading...</div>
    }
}

export default SinglePost;