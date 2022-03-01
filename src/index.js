import app from './app';
import router from './routes';
import userRouter from './routes/users';

const port = 1337;

app.use('/', router);
app.use('/users/', userRouter);
app.listen(port, () => {
    console.log('App is runing on port', port);
})