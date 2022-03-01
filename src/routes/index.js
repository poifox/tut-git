import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send('Hola desde el router!');
});

router.get('/privacy', (req, res) => {
    res.send('Esta es nuestra política de privacidad!');
});

export default router;
