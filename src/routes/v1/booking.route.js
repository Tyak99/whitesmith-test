import express from 'express';
import { bookingController } from '../../controllers';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post('/', auth('createBooking'), bookingController.createBooking);
router.delete('/:bookingId', auth('deleteBooking'), bookingController.deleteBooking);

export default router;
