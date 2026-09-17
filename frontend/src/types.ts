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

export interface UserStore {
  user: User | null;
  token: string;
  setToken: (user: User, token: string) => void;
  clearToken: () => void;
}
