export type RegisterUser = {
  name: string;
  email: string;
  userRole: number;
  password: string;
  confirmPassword: string;
  skills: string;
};

export type loggedInUser = {
  id: string;
  name: string;
  email: string;
  userRole: number;
};

export type authState = {
  isLoggedIn: boolean;
  user: loggedInUser | null;
  authorization: null | string;
};

export type resetPassowrdInput = {
  password: string;
  confirmPassword: string;
  token: string;
};
