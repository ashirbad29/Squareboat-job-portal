import Axios from 'axios';

const API_BASE_URL = 'https://jobs-api.squareboat.info/api/v1/';

const axios = Axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axios;
