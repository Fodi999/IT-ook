import { Router } from 'express';
import path from 'path';

const router = Router();

router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../../views/about.html'));
});

export default router;
