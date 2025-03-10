import { Router } from 'express'
import Container, { Service } from 'typedi'

import UsersController from '../controllers/users.controller'

@Service()
class IndexRoute {
    public router: Router;

    constructor(private usersController: UsersController) {
        this.router = Router();
        this.usersController = Container.get<UsersController>(
          UsersController
        );
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.get(
            '/users',
            this.usersController.getUsers
        );
    }
}

export default IndexRoute;
