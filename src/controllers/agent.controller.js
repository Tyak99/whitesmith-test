import appIdGenerator from '../utils/appIdGenerator.helper';
import responseUtil from '../utils/responseUtil';
import { Agent, Booking, User } from '../models';

const registerAgent = async (req, res) => {
  try {
    const appId = appIdGenerator();
    const data = { ...req.body, appId };
    const agent = await Agent.create(data);
    responseUtil.successResponse(res, 'Created agent', agent);
  } catch (error) {
    responseUtil.errorResponse(res, error);
  }
};

const getAgents = async (req, res) => {
  try {
    const agents = await Agent.find();
    responseUtil.successResponse(res, '', agents);
  } catch (error) {
    responseUtil.errorResponse(error);
  }
};

const getUsers = async (req, res) => {
  const { agent } = req;
  try {
    const bookings = await Booking.find({ agent: agent.id }, { _id: 1 });
    if (bookings.length > 0) {
      const users = await User.find({ _id: { $in: bookings } });
      console.log('🚀 ~ file: agent.controller.js ~ line 31 ~ getUsers ~ users', users);
      responseUtil.successResponse(res, '', users);
    } else {
      responseUtil.successResponse(res, '', []);
    }
  } catch (error) {
    responseUtil.errorResponse(res, error, 422);
  }
};

export default {
  registerAgent,
  getAgents,
  getUsers,
};
