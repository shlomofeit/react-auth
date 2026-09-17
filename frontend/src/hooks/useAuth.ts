import axios from "axios";
import type { SignupData } from "../types";
import { useUserStore } from "../store/userUserStore";
import { useState } from "react";
import { getProfileRequest, signupRequest } from "../api/authApi";

export const useAuth = () => {
  const user = useUserStore((state) => state.user);
  const token = useUserStore((state) => state.token);
  const setToken = useUserStore((state) => state.setToken);

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

  return { user, token, loading, error, signup };
};
