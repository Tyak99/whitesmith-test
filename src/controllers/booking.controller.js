import httpStatus from 'http-status';
import responseUtil from '../utils/responseUtil';
import { Booking } from '../models';

const getBookings = async () => {

};

const createBooking = async (req, res) => {
  try {
    const { agent } = req;
    const { startAt, finishAt, user } = req.body;

    const booking = await Booking.create({
      startAt, finishAt, user, agent: agent.id,
    });
    responseUtil.successResponse(res, 'Booking created successfully', booking);
  } catch (error) {
    responseUtil.errorResponse(res, error, httpStatus.UNPROCESSABLE_ENTITY);
  }
};

const deleteBooking = async (req, res) => {
  try {
    const { bookingId } = req;
    const booking = await Booking.findOneAndDelete(bookingId);
    if (!booking) {
      throw new Error('Unable to find booking with the provided Id');
    }
    responseUtil.successResponse(res, 'Deleted successfully');
  } catch (error) {
    responseUtil.errorResponse(res, error, httpStatus.UNPROCESSABLE_ENTITY);
  }
};

export default {
  getBookings,
  createBooking,
  deleteBooking,
};
