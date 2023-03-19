import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';
import { username } from '../config/database';

export default class Usuario extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: 'O campo nome deve ter no mínimo 3 letras',
                    },
                },
            },
            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    isEmail: {
                        msg: 'Email inválido',
                    },
                },
            },
            senha_hash: {
                type: Sequelize.STRING,
                defaultValue: '',
            },
            senha: {
                type: Sequelize.VIRTUAL,
                defaultValue: '',
                validate: {
                    len: {
                        args: [6, 50],
                        msg: 'O campo senha deve ter no mínimo 6 caracteres',
                    },
                },
            },
            deleted: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
        }, {
            sequelize,
        });

        this.addHook('beforeSave', async usuario => {
            if(usuario.senha) {
                usuario.senha_hash = await bcryptjs.hash(usuario.senha, 8);
            }
        });

        return this;
    }
}