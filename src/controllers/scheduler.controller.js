import dayjs from 'dayjs';
import { Booking } from '../models';
import responseUtil from '../utils/responseUtil';

const getSchedules = async (req, res) => {
  try {
    const { week } = req.query;
    const beginningOfWeek = dayjs(new Date(week)).startOf('week').format();
    const bookings = await Booking.find({ createdAt: { $gte: new Date(beginningOfWeek) } });

    responseUtil.successResponse(res, '', bookings);
  } catch (error) {
    responseUtil.errorResponse(res, error);
  }
};

export default {
  getSchedules,
};
