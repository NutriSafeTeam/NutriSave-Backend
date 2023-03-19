import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Cliente from '../models/Cliente';
import Usuario from '../models/Usuario';

const models = [Cliente, Usuario];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
