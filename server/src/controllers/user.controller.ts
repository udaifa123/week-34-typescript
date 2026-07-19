import { Request, Response } from "express";
import { User } from "../models/user.model";

let users: User[] = [];

export const getUsers = (req: Request, res: Response) => {
  res.json(users);
};

export const createUser = (req: Request<{}, {}, User>, res: Response) => {
  users.push(req.body);
  res.json(users);
};

export const deleteUser = (req: Request<{ id: string }>, res: Response) => {
  const id = Number(req.params.id);
  users = users.filter(u => u.id !== id);
  res.json(users);
};