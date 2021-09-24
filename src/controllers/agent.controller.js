import appIdGenerator from '../../utils/appIdGenerator.helper';
import { Agent } from '../models';

const registerAgent = async (req, res) => {
  try {
    const appId = appIdGenerator();
    const data = { ...req.body, appId };
    const agent = await Agent.create(data);
    res.json(agent);
  } catch (error) {
    // console.log('🚀 ~ file: agent.controller.js ~ line 7 ~ registerAgent ~ error', error);
  }
};

export default {
  // eslint-disable-next-line import/prefer-default-export
  registerAgent,
};
