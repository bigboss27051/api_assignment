import { Request, Response } from 'express'
import 'reflect-metadata'
import Container from 'typedi'
import UsersController from '../../controllers/users.controller'
import UsersService from '../../services/users.service'

const mockedResponse = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
};
const res = mockedResponse as unknown as Response & { status: jest.Mock };
jest.mock('../../services/users.service');

const mockedUsersService = {
    getusers: jest.fn(),
    getShortMenu: jest.fn(),
    getFulllMenu: jest.fn(),
} as unknown as jest.Mocked<UsersService>;

describe('UsersController', () => {
    let controller: UsersController;
    let req: Partial<Request>;

    beforeEach(() => {
        Container.set(UsersService, mockedUsersService);

        controller = Container.get(UsersController);
        req = {};
    });

    it('should return users transfromation data successfully', async () => {
        const mockUsers = {
          "Engineering": {
            "male": 2,
            "female": 2,
            "ageRange": "",
            "hair": {
              "Brown": 1,
              "White": 1,
              "Red": 1,
              "Gray": 1
            },
            "addressUser": {
              "EmilyJohnson": "29112",
              "AlexanderJones": "86684",
              "NoahHernandez": "73696",
              "MadisonCollins": "62091"
            }
          },
        };

        mockedUsersService.getUsers = jest.fn().mockResolvedValue({
            data: mockUsers,
        });



        await controller.getUsers(req as Request, res as Response);

        expect(mockedUsersService.getUsers).toHaveBeenCalledTimes(1);
    });
});
