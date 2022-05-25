import app from './app';
import { connect } from './app/mongo';
import router from './routes';
import postsRouter from './routes/posts';
import userRouter from './routes/users';

const port = 1337;

(async function() {
    await connect();
    app.use('/', router);
    app.use('/users/', userRouter);
    app.use('/posts/', postsRouter);
    app.listen(port, () => {
        console.log('App is runing on port', port);
    });
})();
