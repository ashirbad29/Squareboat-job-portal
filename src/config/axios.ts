import Axios from 'axios';

import { store } from '../state/store';

const API_BASE_URL = 'https://jobs-api.squareboat.info/api/v1/';

const axios = Axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axios.interceptors.request.use(
  (config) => {
    const request = config;
    const authorization = store.getState().auth?.authorization;

    if (request.headers && authorization) {
      // eslint-disable-next-line dot-notation
      request.headers['Authorization'] = authorization;
    }

    return request;
  },
  (err) => Promise.reject(err)
);

export default axios;
