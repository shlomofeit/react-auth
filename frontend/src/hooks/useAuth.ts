import type { SignupData } from "../types";
import { useUserStore } from "../store/userUserStore";
import { getProfileRequest, signupRequest } from "../api/authApi";

export const useAuth = () => {
  const user = useUserStore((state) => state.user);
  const token = useUserStore((state) => state.token);
  const setToken = useUserStore((state) => state.setToken);

  const signup = async (data: SignupData) => {
    const { token } = await signupRequest(data);
    const { user } = await getProfileRequest(token);
    setToken(user, token);
    return true;
  };

  return { user, token, signup };
};
