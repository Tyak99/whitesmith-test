import express from 'express';
import { userController } from '../../controllers';
import auth from '../../middlewares/auth';

const router = express.Router();

router.get('/', auth('getUsers'), userController.getUsers);

export default router;
