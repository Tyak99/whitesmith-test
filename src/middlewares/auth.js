import httpStatus from 'http-status';
import { rolesRights } from '../config/roles';
import { Agent } from '../models';
import responseUtil from '../utils/responseUtil';

const auth = (...requiredRights) => async (req, res, next) => {
  try {
    const appId = req.headers['x-agent-id'];

    if (!appId) throw new Error('Invalid app Id, please confirm your appId');

    const agent = await Agent.findOne({ appId });
    if (!agent) throw new Error('Invalid appId');

    if (requiredRights.length) {
      const agentRights = rolesRights.get(agent.role);
      const hasRequiredRights = requiredRights
        .every((requiredRight) => agentRights.includes(requiredRight));

      if (!hasRequiredRights) throw new Error('Forbidden');
      req.agent = agent;
    }
    next();
  } catch (error) {
    responseUtil.errorResponse(res, error, httpStatus.FORBIDDEN);
  }
};

export default auth;
