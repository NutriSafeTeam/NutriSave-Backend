import Sequelize, { Model } from 'sequelize';

export default class Cliente extends Model {
    static init(sequelize) {
        super.init({
            nome: Sequelize.STRING,
            email: Sequelize.STRING,
            senha: Sequelize.STRING,
            telefone: Sequelize.STRING,
            deleted: Sequelize.BOOLEAN,
        }, {
            sequelize,
        });
        return this;
    }
}