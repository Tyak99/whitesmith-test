import appIdGenerator from '../../utils/appIdGenerator.helper';
import responseUtil from '../../utils/responseUtil';
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

export default {
  // eslint-disable-next-line import/prefer-default-export
  registerAgent,
};
