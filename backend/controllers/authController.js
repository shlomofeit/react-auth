import { login, register } from "../services/authService.js";

export const signup = async (req, res) => {
  const user = req.body;
  const token = await register(user);

  return res.status(201).json({ token });
};

export const loginUser = async (req, res) => {
  const user = req.body;
  const token = await login(user);

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });
  return res.status(200).json({ token });
};

export const logout = (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({ message: "Logged out successfully" });
};

export const getProfile = (req, res) => {
  const user = req.user;
  return res.status(200).json({ user });
};
