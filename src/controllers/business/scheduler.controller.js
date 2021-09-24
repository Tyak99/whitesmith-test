import responseUtil from '../../utils/responseUtil';

const getSchedules = (req, res) => {
  responseUtil.successResponse(res, 'Done');
};

export default {
  getSchedules,
};
