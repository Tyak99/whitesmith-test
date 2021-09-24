import appIdGenerator from '../utils/appIdGenerator.helper';
import responseUtil from '../utils/responseUtil';
import { Agent } from '../models';

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

export default {
  registerAgent,
  getAgents,
};
