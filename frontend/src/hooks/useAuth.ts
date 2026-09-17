import axios from "axios";
import type { SignupData } from "../types";
import { useUserStore } from "../store/userUserStore";
import { useState } from "react";
import {
  getProfileRequest,
  loginRequest,
  logoutRequest,
  signupRequest,
} from "../api/authApi";

export const useAuth = () => {
  const user = useUserStore((state) => state.user);
  const token = useUserStore((state) => state.token);
  const setToken = useUserStore((state) => state.setToken);
  const clearToken = useUserStore((state) => state.clearToken);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signup = async (data: SignupData) => {
    setLoading(true);
    setError(null);
    try {
      const { token } = await signupRequest(data);
      const { user } = await getProfileRequest(token);
      setToken(user, token);
      return true;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.code === "401") setError("uauthorization");
      } else {
        setError("server error");
      }
      return false;
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const { token } = await loginRequest(email, password);
      const { user } = await getProfileRequest(token);
      setToken(user, token);
      return true;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.code === "401") {
          setError("uauthorization");
        }
      } else {
        setError("server error");
      }
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await logoutRequest();
    } finally {
      clearToken();
    }
  };

  return { user, token, loading, error, login, signup, logout };
};
