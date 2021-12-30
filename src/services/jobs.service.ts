import { API_ENDPOINTS } from '../config/api';
import axios from '../config/axios';
import { jobPostType } from '../types/jobs';

export const postJob = async (jobDetails: jobPostType) => {
  const { data } = await axios.post(API_ENDPOINTS.JOBS, jobDetails);
  return data.data;
};

export const getJobsByUser = async (pageNo: number) => {
  const { data } = await axios.get(API_ENDPOINTS.RECRUITER_POSTED_JOBS, {
    params: {
      page: pageNo,
    },
  });
  return { data: data.data.data, meta: data.data.metadata };
};

export const getApplications = async (jobId: string, pageNo?: number) => {
  const { data } = await axios.get(
    `${API_ENDPOINTS.RECRUITER_POSTED_JOBS}/${jobId}/candidates`
  );

  return data.data;
};
