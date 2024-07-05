import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
        type: String,
        unique: true,
      },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    profilePicture: {
      type: String,
      default: "https://imgs.search.brave.com/8asUjCKESbvc3leNSQI-4zrpWVZ6esGB-THFGzBmiZI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzY0LzY3LzUy/LzM2MF9GXzY0Njc1/MjA5Xzd2ZTJYUUFO/dXp1SGpNWlhQM2FJ/WUlwc0RLRWJGNWRE/LmpwZw",
    },
  },

  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;