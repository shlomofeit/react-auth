export interface User {
  id: string;
  username: string;
  email: string;
  role?: string;
}

export interface SignupData {
  username: string;
  email: string;
  password: string;
}
