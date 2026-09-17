import { register } from "../services/authService.js";

export const signup = async (req, res) => {
  const user = req.body;
  const newId = await register(user);

  return res
    .status(201)
    .json({ msg: "User regitered successfully", id: newId });
};
