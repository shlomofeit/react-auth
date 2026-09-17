import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const header = req.headers.authorization;
  const token = header.split(" ")[1];
  //   const token = req.cookies?.token;
  if (!header?.startsWith("Bearer ") || !token) {
    return next(Object.assign(new Error("no token provided"), { status: 401 }));
  }
  try {
    req.user = jwt.verify(token, process.env.SECRET_KEY);
    next();
  } catch {
    return res.status(401).json({ msg: "Invalid token" });
  }
};
