import cors from 'cors';
import express, { Application } from 'express';
import Container, { Service } from 'typedi';

import IndexRoute from './routes';

@Service()
class App {
    public app: Application;

    constructor(private indexRoute: IndexRoute) {
        this.app = express();
        this.initializeMiddlewares();
        this.indexRoute = Container.get(IndexRoute);
        this.app.use('/api', this.indexRoute.router);
    }

    private initializeMiddlewares(): void {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }
}

export default App;
