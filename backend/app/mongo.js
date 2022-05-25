import mongoose from 'mongoose';

export async function connect() {
    return await mongoose.connect('mongodb://mongodb/dockerNode');
}
