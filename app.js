import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import homeRoutes from './src/routes/HomeRoutes.js';
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
    }

    routes() {
        this.app.use('/', homeRoutes);
        this.app.use('/usuarios/', usuarioRoutes);
        this.app.use('/login/', loginRoutes);
    }
}

export default new App().app;