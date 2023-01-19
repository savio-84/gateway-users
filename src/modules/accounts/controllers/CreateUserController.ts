import { Request, Response } from "express";
import { usersRepository } from "../infra/repositories/UsersRepository";
import { UsersRepositoryInMemory } from "../repositories/implementations/UsersRepositoryInMemory";
import { IUsersRepository } from "../repositories/IUsersRepository";
import { CreateUserService } from "../services/CreateUserService";


class CreateUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    const createUserService = new CreateUserService(usersRepository);
    const user = await createUserService.execute({ name, email, password })
    return response.status(200).json(user);
  }
}

export { CreateUserController };