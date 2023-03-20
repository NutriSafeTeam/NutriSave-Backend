import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuario';

class LoginController {
    async send(req, res) {
        const { email = '', senha = ''} = req.body;

        if(!email || !senha) {
            return res.status(401).json({
                errors: ['Credenciais inválidas'],
            });
        }
        const usuario = await Usuario.findOne( { where: { email } });
        
        if(!usuario || usuario.deleted == true) {
            return res.status(401).json({
                errors: ['Credenciais inválidas'],
            });
        }

        if(!(await usuario.senhaIsValid(senha))) {
            return res.status(401).json({
                errors: ['Credenciais inválidas'],
            });
        }

        const { id } = usuario;
        const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
            expiresIn: process.env.TOKEN_EXPIRATION,
        });
        const data = {
            sucess: true,
            message: 'Login success'
        };
        res.setHeader('Authorization', 'Bearer ' + token);
        return res.status(200).json(data);
    }
}

export default new LoginController();