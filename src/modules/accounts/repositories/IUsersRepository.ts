import { ICreateUserDTO } from "../interfaces/ICreateUserDTO";
import { User } from "../entities/User";

interface IUsersRepository {
  create({ name, email, password }: ICreateUserDTO): Promise<User>;
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  list(): Promise<User[]>;
  delete(id: string): Promise<void>;
}

export { IUsersRepository };