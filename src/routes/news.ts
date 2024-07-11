import { Router } from 'express';
import path from 'path';

const router = Router();

router.get('/news', (req, res) => {
    res.sendFile(path.join(__dirname, '../../views/news.html'));
});

export default router;
