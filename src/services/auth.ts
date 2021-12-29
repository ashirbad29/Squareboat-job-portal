import { API_ENDPOINTS } from '../config/api';
import axios from '../config/axios';
import { RegisterUser } from '../types/auth';

export const registerUser = async (userData: RegisterUser) => {
  const { data } = await axios.post(API_ENDPOINTS.REGISTER, userData);
  const { id, name, email, userRole, token } = data.data;

  return {
    id,
    name,
    email,
    userRole,
    token,
  };
};
