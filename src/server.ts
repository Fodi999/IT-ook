import express from 'express';
import path from 'path';
import indexRouter from './routes/index';
import aboutRouter from './routes/about';
import businessRouter from './routes/business';
import newsRouter from './routes/news';
import loginRouter from './routes/login';
import registerRouter from './routes/register';

const app = express();
const PORT = 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, '../')));

// Routes
app.use('/', indexRouter);
app.use('/', aboutRouter);
app.use('/', businessRouter);
app.use('/', newsRouter);
app.use('/', loginRouter);
app.use('/', registerRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

