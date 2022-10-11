import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

app.get('/users', (req: Request, res: Response) => {
  const users = [{ name: 'John Doe', email: 'john@gmail.com' }];

  res.status(200).json(users);
});

app.post('/users', (req: Request, res: Response) => {
  res.status(201).json(req.body);
});
export default app;
