import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const token = req.cookies?.token;
  if (!token) {
    return next(Object.assign(new Error("no token provided"), { status: 401 }));
  }
  try {
    req.user = jwt.verify(token, process.env.SECRET_KEY);
    next();
  } catch {
    return res.status(401).json({ msg: "Invalid token" });
  }
};
