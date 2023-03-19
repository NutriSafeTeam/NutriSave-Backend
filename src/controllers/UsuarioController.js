import { username } from '../config/database';
import Usuario from '../models/Usuario'

class UsuarioController {

    async create(req, res) {
        try {
            const novoUsuario = await Usuario.create(req.body);
            return res.json(novoUsuario);
        } catch (e) {
            res.status(400).json('Email já existe - {error.usuario.create.usuario.email-in-use}');
            res.status(401).json('Não autorizado - {error.usuario.create.usuario.unauthorized}');
            res.status(500).json('Erro interno - {error.usuario.create.usuario.internal-error}');
        }
    }

    async findAll(req, res) {
        try {
            const usuarios = await Usuario.findAll();
            const filtrado = usuarios.filter(function(usuario) {return usuario.deleted == false;});
            return res.json(filtrado);
        } catch (e) {
            return res.json(null);
        }
    }

    async findById(req, res) {
        try {
            const usuario = await Usuario.findByPk(req.params.id);
            return res.json(usuario);
        } catch (e) {
            return res.json(null);
        }
    }

    async update(req, res) {
        try {

            const usuario = await Usuario.findByPk(req.params.id);

            if(!usuario) {
                return res.status(400).json({
                    errors: ['Usuario não existe - {error.usuario.update.usuario.not-exist}\t\n']
                })
            }
            const novosDados = await usuario.update(req.body);

            return res.json(novosDados);

        } catch (e) {
            return res.json(null);
        }
    }

    async delete(req, res) {
        try {
            const usuario = await Usuario.findByPk(req.params.id);
            
            if(!usuario) {
                return res.status(400).json({
                    errors: ['Usuario não existe - {error.usuario.delete.usuario.not-exist}\t\n']
                })
            }
            const novosDados = await usuario.update({"deleted": true});

            return res.json(novosDados);
        } catch (e) {
            console.log(e);
            return res.json(null);
        }
    }
}

export default new UsuarioController();