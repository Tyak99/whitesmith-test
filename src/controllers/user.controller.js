import { Booking, User } from '../models';
import responseUtil from '../utils/responseUtil';

const getUsers = async (req, res) => {
  const { agent } = req;
  try {
    const bookings = await Booking.find({ agent: agent.id }, { user: 1, _id: 0 });
    const queryArray = bookings.map((booking) => booking.user);
    let result = [];

    if (bookings.length > 0) {
      const users = await User.find({ _id: { $in: queryArray } });
      result = users;
    }

    responseUtil.successResponse(res, '', result);
  } catch (error) {
    responseUtil.errorResponse(res, error, 422);
  }
};

export default {
  getUsers,
};
