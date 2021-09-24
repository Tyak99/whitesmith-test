import appIdGenerator from '../utils/appIdGenerator';
import responseUtil from '../utils/responseUtil';
import { Agent, User } from '../models';
import seedData from '../utils/seedData';

const registerAgent = async (req, res) => {
  try {
    const appId = appIdGenerator();
    const data = { ...req.body, appId };
    const agent = await Agent.create(data);
    const usersInDb = await User.find();
    if (usersInDb.length < 1) {
      seedData.insertRandomUsers();
    }
    responseUtil.successResponse(res, 'Created agent', agent);
  } catch (error) {
    responseUtil.errorResponse(res, error);
  }
};

const getAgents = async (req, res) => {
  try {
    const agents = await Agent.find({}, { appId: 0 });
    responseUtil.successResponse(res, '', agents);
  } catch (error) {
    responseUtil.errorResponse(error);
  }
};

export default {
  registerAgent,
  getAgents,
};
