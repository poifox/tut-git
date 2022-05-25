import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    res.json({ status: 200, message: 'Successful', data: {
        name: 'Mi Aplicación',
        version: '1.0.0'
    }});
});

export default router;
