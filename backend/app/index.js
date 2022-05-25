import cors from 'cors';
import express from 'express';
import path from 'path';

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static(path.resolve(__dirname, '../../public'), {
  dotfiles: 'ignore',
  etag: false,
  index: false,
  maxAge: '1d',
  redirect: false,
  lastModified: true,
  setHeaders: (res, path, stat) => {
    res.set('x-timestamp', Date.now());
  }
}));

export default app;
