import mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
    title: String,
    content: String,
    created: Date,
    modified: Date,
    author: String
});

export const Post = mongoose.model('Post', PostSchema);
