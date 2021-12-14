export const requestHandler = (req) => {
  return req;
};

export const responseHandler = (res) => {
  return res;
};

export const errorHandler = (error) => {
  return Promise.reject(error);
};
