import { Request, Response } from "express";
import { usersRepository } from "../infra/repositories/UsersRepository";
import { UsersRepositoryInMemory } from "../repositories/implementations/UsersRepositoryInMemory";
import { IUsersRepository } from "../repositories/IUsersRepository";
import { ListUsersService } from "../services/ListUsersService";

class ListUsersController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const listUsersService = new ListUsersService(usersRepository);
    const users = await listUsersService.execute();
    return response.status(200).json(users);
  }
}

export { ListUsersController };