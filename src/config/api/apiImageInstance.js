import axios from axios

import {requestHandler,responseHandler,errorHandler} from './helpers/interceptorHeplers'

const _axios =({baseImageURL})=>{ 
  return axios.create({
    baseURL: `${baseImageURL}`,
    params: {
      api_key: "16d93195fd8c47c238d40068d57c67be",
    },
  })};
  
  _axios.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => errorHandler(error)
  );
  
  _axios.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error)
  );