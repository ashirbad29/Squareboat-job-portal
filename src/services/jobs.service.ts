import { API_ENDPOINTS } from '../config/api';
import axios from '../config/axios';
import { jobPostType } from '../types/jobs';

export const postJob = async (jobDetails: jobPostType) => {
  const { data } = await axios.post(API_ENDPOINTS.JOBS, jobDetails);
  return data.data;
};
