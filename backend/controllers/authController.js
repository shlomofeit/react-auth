import { login, register } from "../services/authService.js";

export const signup = async (req, res) => {
  const user = req.body;
  const newId = await register(user);

  return res
    .status(201)
    .json({ msg: "User regitered successfully", id: newId });
};

export const loginUser = async (req, res) => {
  const user = req.body;
  const token = await login(user);

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });
  return res
    .status(200)
    .json({ msg: `${user.username} logged in successfully` });
};
