import axios from "axios";
import type { SignupData } from "../types";

const BASE_URL = "http://localhost:3000";

export const signupRequest = async (user: SignupData) => {
  const { data } = await axios.post(`${BASE_URL}/signup`, user);
  return data as { token: string };
};

export const loginRequest = async (email: string, password: string) => {
  const { data } = await axios.post(`${BASE_URL}/login`, { email, password });
  return data;
};

export const logoutRequest = async () => {
  await axios.post(`${BASE_URL}/logout`);
};
