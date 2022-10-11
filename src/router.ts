import { Router } from 'express';
import UserRouter from './controllers/Users';

const Routes = () => {
  const routes = Router();
  const userRouter = UserRouter();
  // eslint-disable-next-line prettier/prettier
  const user = [
    routes.get('/', userRouter.findAll), 
    routes.post('/', userRouter.create)
  ];


  return { user };
};

export default Routes;
