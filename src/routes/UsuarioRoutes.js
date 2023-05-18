import { Router } from 'express'
import UsuarioController from '../controllers/UsuarioController'

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', UsuarioController.create);
router.get('/',  UsuarioController.findAll);
router.get('/:id', UsuarioController.findById);
router.put('/:id', UsuarioController.update);
router.delete('/:id', UsuarioController.delete);

export default router;