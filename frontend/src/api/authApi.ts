import axios from "axios";
import type { SignupData, User } from "../types";

const BASE_URL = "http://localhost:3000";

export const signupRequest = async (user: SignupData) => {
  const { data } = await axios.post(`${BASE_URL}/signup`, user);
  return data as { token: string };
};

export const loginRequest = async (email: string, password: string) => {
  const { data } = await axios.post(`${BASE_URL}/login`, { email, password });
  return data as { token: string };
};

export const getProfileRequest = async (token: string) => {
  const { data } = await axios.get(`${BASE_URL}/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data as { user: User };
};

export const logoutRequest = async () => {
  await axios.post(`${BASE_URL}/logout`);
};
