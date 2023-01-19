import { User } from "../entities/User";
import { IUsersRepository } from "../repositories/IUsersRepository";


class ListUsersService {
  constructor(
    private usersRepository: IUsersRepository
  ) {}

  public async execute(): Promise<User[] | undefined> {
    try {
      return await this.usersRepository.list();
    } catch(error: any) {
      console.log(error.message);
    }
  }
}

export { ListUsersService };