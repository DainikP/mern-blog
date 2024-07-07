import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import User from "../model/user.model.js";

export const createUser = (req, res) => {
  // Logic to create a user
  res.send("User created");
};

export const updateUser = async (req, res, next) => {
  console.log("req.user:", req.user); // Debug log

  if (!req.user) {
    return next(errorHandler(401, "User not authenticated"));
  }

  if (req.user.id !== req.params.id) {
    return next(errorHandler(403, "You can't update another user's account."));
  }

  if (req.body.password) {
    if (req.body.password.length < 6) {
      return next(errorHandler(400, "Password must be at least 6 characters."));
    }
    req.body.password = bcryptjs.hashSync(req.body.password, 10);
  }

  if (req.body.username) {
    if (req.body.username.length < 5 || req.body.username.length > 20) {
      return next(
        errorHandler(400, "Username must be between 5 and 20 characters.")
      );
    }
    if (req.body.username.includes(" ")) {
      return next(errorHandler(400, "Username cannot contain spaces."));
    }
    // if (req.body.username.toLowerCase() !== req.user.username.toLowerCase()) {
    //   return next(errorHandler(400, "You can't change your username."));
    // }
    if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
      return next(
        errorHandler(400, "Username can only contain letters and numbers.")
      );
    }
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          profilePicture: req.body.profilePicture,
        },
      },
      { new: true }
    );

    res.send(updatedUser);

    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};


export const delateUser = async (req, res, next) => {
  if (!req.user) {
    return next(errorHandler(401, "User not authenticated"));
  }

  if (req.user.id !== req.params.id) {
    return next(errorHandler(403, "You can't delete another user's account."));
  }

  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (error) {
    next(error);
  }

}

export const SignOut = async (req, res, next) => {
  res
    .clearCookie("token")
    .status(200)
    .json({ success: true, message: "Logged out successfully." });
}
