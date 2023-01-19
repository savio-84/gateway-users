import { ICreateUserDTO } from "../interfaces/ICreateUserDTO";
import { IUsersRepository } from "../repositories/IUsersRepository";
import {hash} from 'bcryptjs';
import { User } from "../entities/User";

class CreateUserService {
  constructor(
    private usersRepository: IUsersRepository
  ) {}

  public async execute({ name, email, password }: ICreateUserDTO): Promise<User | undefined> {
    
    try {
      const userAlreadyExists = await this.usersRepository.findByEmail(email);
      if (userAlreadyExists) throw new Error("User already exists") 
      const passwordHash = await hash(password, 8);
      return await this.usersRepository.create({
        name,
        email,
        password: passwordHash
      })
    } catch(error: any) {
      console.log(error.message);
    }
  }
}

export { CreateUserService };