import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/error.js";

export const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return next(errorHandler(401, "You are not authenticated!"));
  }
  
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) return next(errorHandler(403, "Token is not valid!"));
    req.user = user;
    next();
  });
};
