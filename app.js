import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import homeRoutes from './src/routes/HomeRoutes.js';
import cors from 'cors';
import loginRoutes from './src/routes/LoginRoutes.js';
import usuarioRoutes from './src/routes/UsuarioRoutes.js';


class App {

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
        this.app.use((req, res, next) => {
            res.header('Access-Control-Expose-Headers', 'Authorization');
            res.header('Access-Control-Allow-Headers', 'Content-Type, X-Custom-Header, Authorization');
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            this.app.use(cors());
            next();
        });
    }

    routes() {
        this.app.use('/', homeRoutes);
        this.app.use('/usuarios/', usuarioRoutes);
        this.app.use('/login/', loginRoutes);
    }
}

export default new App().app;