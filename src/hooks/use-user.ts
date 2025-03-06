import { create } from "zustand";

import type { UserType } from "../../types";

type UseUserType = {
  user: UserType | null;
  setUser: (user: UserType | null) => void;
  deleteUser: () => void;
};

export const useUser = create<UseUserType>((set) => ({
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : null,
  setUser: (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    set({ user });
  },
  deleteUser: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("my-courses");
    set({ user: null });
  },
}));
