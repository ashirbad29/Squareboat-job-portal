import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { authState, loggedInUser } from '../types/auth';
import { useAppSelector } from './hooks';

const initialState: authState = {
  isLoggedIn: false,
  user: null,
  authorization: null,
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ user: loggedInUser; authorization: string }>
    ) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.authorization = action.payload.authorization;
    },

    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },

    setUserData: (state, action: PayloadAction<loggedInUser>) => {
      state.user = { ...state.user, ...action.payload };
    },

    setAuthToken: (state, action: PayloadAction<string | null>) => {
      state.authorization = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { login, logout, setAuthToken, setUserData } = authSlice.actions;

// To get the overall Auth state of app
export const useAuthState = () => {
  return useAppSelector((state) => state.auth);
};

// To get the user data when loggedin
export const useUser = () => {
  return useAppSelector((state) => state.auth.user);
};
