
import { Router } from 'express';

const userRouter = Router();

userRouter.get('/:username', (req, res) => {
    res.send(`Hola, ${req.params.username}!`);
});

export default userRouter;


