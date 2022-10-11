import bodyParser from 'body-parser';
import { Express } from 'express';
import Routes from '../router';

const Middlewares = (app: Express) => {
  const routes = Routes();
  app.use(bodyParser.json());
  app.use('/users', routes.user);
};

export default Middlewares;
