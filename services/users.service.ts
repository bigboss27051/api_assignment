import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { Service } from 'typedi'
import * as ENDPOINT from '../constants/end_points'
import { PaginationPersonModel } from '../models/person.model'

@Service()
class UsersService {
    private http: AxiosInstance = axios;

    async getUsers(): Promise<AxiosResponse<PaginationPersonModel>> {
        const endpoint = ENDPOINT.getUsers();
        return this.http.get(endpoint);
    }
}

export default UsersService;
