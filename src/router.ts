import { Router } from 'express';
import UserRouter from './controllers/Users';
import app from './services/app';

const Routes = () => {
  const routes = Router();
  const userRouter = UserRouter(app);
  // eslint-disable-next-line prettier/prettier
  const user = [
    routes.get('/', userRouter.findAll), 
    routes.post('/', userRouter.create)
  ];


  return { user };
};

export default Routes;
