import { API_ENDPOINTS } from '../config/api';
import axios from '../config/axios';
import { RegisterUser, resetPassowrdInput } from '../types/auth';

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

export const loginUser = async (userInfo: { email: string; password: string }) => {
  const { data } = await axios.post(API_ENDPOINTS.LOGIN, userInfo);
  const { id, name, email, userRole, token } = data.data;

  return {
    id,
    name,
    email,
    userRole,
    token,
  };
};

export const getResetPasswordToken = async (email: string) => {
  const { data } = await axios.get(API_ENDPOINTS.RESET_PASSWORD, { params: { email } });
  const { token } = data.data;
  return token;
};

export const resetPassword = async (creds: resetPassowrdInput) => {
  const { data } = await axios.post(API_ENDPOINTS.RESET_PASSWORD, creds);
  return data.data;
};
