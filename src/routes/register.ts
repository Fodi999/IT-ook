import { Router } from 'express';
import path from 'path';

const router = Router();

router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../../views/register.html'));
});

export default router;
