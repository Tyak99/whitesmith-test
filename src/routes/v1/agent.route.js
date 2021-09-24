import express from 'express';
import { agentController } from '../../controllers';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post('/', agentController.registerAgent);
router.get('/', auth('getAgents'), agentController.getAgents);

export default router;
