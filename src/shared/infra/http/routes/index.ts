import { Request, Response, Router } from "express";
const routes = Router();

import { CreateUserController } from "../../../../modules/accounts/controllers/CreateUserController";
import { ListUsersController } from "../../../../modules/accounts/controllers/ListUsersController";

const createUsersController = new CreateUserController();
const listUsersController = new ListUsersController();

routes.get('/test-availability', (request: Request, response: Response) => {
  return response.status(200).send("Welcome to users microsservice\n");
})

routes.post('/', createUsersController.handle);
routes.get('/', listUsersController.handle);


export { routes };