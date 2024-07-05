import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";


export  const  signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === '' ||
    email === '' ||
    password === ''
  ) {
    next(errorHandler(400, 'All fields are required'));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.json(newUser)
    res.status(201).json('User created successfully');
  } catch (error) {
    next(error)
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email.trim() === '' || password.trim() === '') {
    return next(errorHandler(400, 'All fields are required'));
  }

  try {
    const user = await User.findOne({ email });
    
    if (!user) {
      return next(errorHandler(404, 'User not found'));
    }

    const isMatch = await bcryptjs.compareSync(password, user.password);
    if (!isMatch) {
      return next(errorHandler(401, 'Invalid credentials'));
    }

    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
    const token = jwt.sign({ id: user._id }, JWT_SECRET_KEY, { expiresIn: '30d' });
    res.cookie('access_token', token, { httpOnly: true });
    res.json({ token });
  } catch (error) {
    next(error);
  }
};


export const google = async (req, res, next) => {
  const { email ,name,googlePhotoUrl } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '30d' });
      const {password, ...others} = user._doc;
      res.status(200).cookie('access_token', token, { httpOnly: true }).json(rest);
    } else {
      const genratedPassword = Math.random().toString(36).slice(-8)+Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(genratedPassword, 10);
      const newUser = new User({
        username: name.toLowerCase().split(' ').join('')+Math.random().toString(9).slice(-4),
        password: hashedPassword,
        email: email,
        profilePicture:googlePhotoUrl
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: '30d' });
      res.status(200).cookie('access_token', token, { httpOnly: true }).json({ token });

    }
    
  }
     catch (error) {
    next(error);
  }

}