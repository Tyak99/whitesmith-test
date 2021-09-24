const successResponse = (res, message, data) => {
  const result = {
    status: true,
    message,
    data,
  };
  return res.json(result);
};

const errorResponse = (responseObject, errorObject, statusCode = 400) => {
  console.log(JSON.stringify(errorObject));

  const message = errorObject.message != null ? errorObject.message : 'An error occurred';

  const result = {
    status: false,
    message,
    data: errorObject,
  };

  return responseObject.status(statusCode).json(result);
};

export default {
  successResponse,
  errorResponse,
};
