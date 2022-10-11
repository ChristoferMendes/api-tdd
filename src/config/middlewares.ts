import bodyParser from 'body-parser';
import { Express } from 'express';

const Middlewares = (app: Express) => {
  app.use(bodyParser.json());
};

export default Middlewares;
