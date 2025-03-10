import { Request, Response } from 'express'
import Container, { Service } from 'typedi'

import UsersService from '../services/users.service'
import { transformToDepartmentData } from '../utils/tranformation.data'

@Service()
class UsersController {
    constructor(private usersService: UsersService) {
        this.usersService =
            Container.get<UsersService>(UsersService);
    }

    getUsers = async (req: Request, res: Response): Promise<Response> => {
        try {
          const resp = await this.usersService.getUsers()
          const respData = resp.data.users
          const result =  transformToDepartmentData(respData)

          return res.json(result);
        } catch (error) {
            return res.status(500).json({ message: (error as Error).message });
        }
    };
}

export default UsersController;
