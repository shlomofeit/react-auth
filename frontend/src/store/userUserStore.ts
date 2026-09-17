import { create } from "zustand";
import { persist } from "zustand/middleware";
import { type UserStore } from "../types";

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      token: "",
      setToken: (user, token) => set({ user, token }),
      clearToken: () => set({ user: null, token: "" }),
    }),
    { name: "token" },
  ),
);
