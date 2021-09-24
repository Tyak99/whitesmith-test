import express from 'express';
import schedulerController from '../../../controllers/business/scheduler.controller';

const router = express.Router();

router.get('/scheduler', schedulerController.getSchedules);

export default router;
