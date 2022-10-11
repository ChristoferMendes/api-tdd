import { Request, Response } from 'express';

const UserRouter = (app: any) => {
  const findAll = async (req: Request, res: Response) => {
    const result = await app.db('users').select();

    res.status(200).json(result[0]);
  };

  const create = async (req: Request, res: Response) => {
    const result = await app.db('users').insert(req.body, '*');

    res.status(200).json(result[0]);
  };

  return { findAll, create };
};

export default UserRouter;
