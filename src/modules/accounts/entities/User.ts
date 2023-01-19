import { v4 as uuid } from "uuid";

interface IUserConstructor {
  id: string;
  name: string;
  email: string;
  password: string;
}

class User {
  private id: string;
  private name: string;
  private email: string;
  private password: string;

  constructor({
    name,
    email,
    password
  }: Pick<IUserConstructor, 'name' | 'email' | 'password'>) {
    this.id = uuid();
    this.name = name;
    this.email = email;
    this.password = password;
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  setPassword(password: string): void {
    this.password = password;
  }

  // comparePassword(password: string): boolean {}
}

export { User };