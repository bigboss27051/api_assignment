import { Application } from 'express';
import 'reflect-metadata';
import Container from 'typedi';
import App from './app';

const app: Application = Container.get(App).app;
const port = 3001;

app.get('/', (req, res) => res.send('LINE MAN Wongnai Frontend Assignment'));

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error) {
    console.error(`Error occured: ${(error as Error).message}`);
}
