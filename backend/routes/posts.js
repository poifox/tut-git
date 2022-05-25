import { Router } from 'express';
import { Post } from '../models/post';

const postsRouter = Router();

postsRouter.get('/', async (req, res) => {
    const posts = await Post.find();
    return res.json({
        status: 200,
        success: true,
        data: {
            posts: posts
        }
    });
}).post('/', async (req, res) => {
    const post = new Post(Object.assign({}, req.body, {
        created: new Date(Date.now()),
        modified: new Date(Date.now()),
    }));
    await post.save().catch((error) => {
        console.error('Error when saving post', error);
    });
    if (post._id) {
        return res.json({
            status: 200,
            success: true,
            data: post.toJSON()
        });
    }
    return res.status(404).json({
        status: 400,
        success: false,
        data: null
    });
});

postsRouter.get('/:postId', async (req, res) => {
    const { postId } = req.params;
    const post = await Post.findById(postId);
    console.log(post);
    if (post) {
        return res.json({
            status: 200,
            success: true,
            data: post
        });
    }
    return res.status(404).json({
        status: 404,
        success: false,
        data: null
    });
}).delete('/:postId', (req, res) => {
    const { postId } = req.params;
    Post.findByIdAndDelete(postId, {}, (error) => {
        if (error) {
            return res.status(404).json({
                status: 404,
                success: false,
                data: null
            });
        } else {
            return res.status(200).json({
                status: 200,
                success: true,
                data: null
            });
        }
    });
});

export default postsRouter;
