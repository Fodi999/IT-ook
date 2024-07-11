import { Router } from 'express';
import path from 'path';

const router = Router();

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../../views/login.html'));
});

export default router;
