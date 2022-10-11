import express, { Request, Response } from 'express';
import Middlewares from '../config/middlewares';

const app = express();
Middlewares(app);

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello World!');
});

export default app;
