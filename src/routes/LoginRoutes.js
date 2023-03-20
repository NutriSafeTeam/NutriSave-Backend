import { Router } from 'express'
import loginController from '../controllers/LoginController'

const router = new Router();

router.post('/', loginController.send);

export default router;