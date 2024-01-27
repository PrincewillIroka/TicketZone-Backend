import mongoose from "mongoose";
import { comparePassword, hashPassword } from "../utils/AuthHelper";
const validator = require("validator");

const UserShema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      unique: true,
      validate: validateEmail,
    },
    password: String,
  },
  { usePushEach: true, timestamps: true }
);

async function validateEmail(email) {
  if (!validator.isEmail(email))
    throw new Error("Please enter a valid email address.");
  const user = await User.findOne({ email });
  if (user)
    throw new Error("A user is already registered with this email address.");
}

UserShema.method({});

UserShema.statics = {
  addUser(email, password) {
    password = hashPassword(password);
    return User.create({
      email,
      password,
    });
  },
  async verifyUser(email, password) {
    let user = await User.findOne({ email }).lean();
    if (user) {
      const hash = user.password;
      const isValidPassword = comparePassword(password, hash);
      if (isValidPassword) {
        return user;
      } else {
        throw new Error("Invalid login credentials!");
      }
    } else {
      throw new Error("User not found!");
    }
  },
};

const User = mongoose.model("User", UserShema);

export default User;
