import { Router } from 'express';
import path from 'path';

const router = Router();

router.get('/business', (req, res) => {
    res.sendFile(path.join(__dirname, '../../views/business.html'));
});

export default router;
