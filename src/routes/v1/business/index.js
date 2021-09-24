import express from 'express';
import schedulerRoutes from './schduler.route';
import agentRoutes from '../agent.route';

const router = express.Router();

router.use('/scheduler?week=weekdate', schedulerRoutes);
router.use('/agents', agentRoutes);

export default router;
