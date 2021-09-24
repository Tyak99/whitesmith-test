import express from 'express';
import { agentController } from '../../controllers';

const router = express.Router();

router.post('/', agentController.registerAgent);
router.post('/', agentController.getAgents);

export default router;
