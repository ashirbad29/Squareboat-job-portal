import { API_ENDPOINTS } from '../config/api';
import axios from '../config/axios';
import { jobPostType } from '../types/jobs';

export const postJob = async (jobDetails: jobPostType) => {
  const { data } = await axios.post(API_ENDPOINTS.JOBS, jobDetails);
  return data.data;
};

export const getJobsByUser = async () => {
  const { data } = await axios.get(API_ENDPOINTS.RECRUITER_POSTED_JOBS);
  return data.data;
};
