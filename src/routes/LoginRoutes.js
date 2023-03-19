import { Router } from 'express'
import loginController from '../controllers/LoginController'

const router = new Router();

router.post('/', loginController.create);

export default router;