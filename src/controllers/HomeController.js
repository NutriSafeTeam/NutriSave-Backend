import Cliente from '../models/Cliente'

class HomeController {
    async index(req, res) {
        const novoCliente = await Cliente.create({
            nome: 'Carlos',
            email: 'carlosfabioa@gmail.com',
            senha: '123',
            telefone: '44991231181',
            deleted: false,
        });
        res.json(novoCliente);
    }
}

export default new HomeController();