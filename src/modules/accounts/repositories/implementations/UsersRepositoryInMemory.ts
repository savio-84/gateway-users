import { ICreateUserDTO } from "../../interfaces/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";


class UsersRepositoryInMemory implements IUsersRepository {
  private repository: User[];

  constructor() {this.repository = []}
  
  async findByEmail(email: string): Promise<User | undefined> {
    return this.repository.find(user => user.getEmail() === email);
  }
  
  async create({ name, email, password }: ICreateUserDTO): Promise<User> {
    const user = new User({name, email, password});
    this.repository.push(user);
    return user;
  }
  async findById(id: string): Promise<User | undefined> {
    return this.repository.find(user => user.getId() === id)
  }
  async list(): Promise<User[]> {
    return this.repository;
  }
  async delete(id: string): Promise<void> {
    try {
      const userIndex = this.repository.findIndex(user => user.getId() === id);
      if (userIndex === -1) throw new Error("User not found!")
      this.repository.splice(userIndex, 1);
    } catch(error: any) {
      console.log(error.message);
    }
    
    throw new Error("Method not implemented.");
  }
}

export { UsersRepositoryInMemory };