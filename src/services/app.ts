import express, { Request, Response } from 'express';
import Middlewares from '../config/middlewares';
import knexfile from '../../knexfile';
import knex from 'knex';

const app: any = express();
// @TODO : CREATE DINAMYC KEYMENT
app.db = knex(knexfile.test);
Middlewares(app);

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello World!');
});

export default app;
