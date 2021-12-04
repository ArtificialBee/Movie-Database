export const requestHandler = (req) => {
  console.log("REQUEST -> ", req);
  return req;
};

export const responseHandler = (res) => {
  console.log("RESPONSE -> ", res);
  return res;
};

export const errorHandler = (error) => {
  return Promise.reject(error);
};
