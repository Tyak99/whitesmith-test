import express from 'express';
import { schedulerController } from '../../controllers';
import auth from '../../middlewares/auth';

const router = express.Router();

router.get('/', auth(), schedulerController.getSchedules);

export default router;
