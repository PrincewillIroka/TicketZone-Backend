import mongoose from "mongoose";
import { comparePassword, hashPassword } from "../utils/helpers/AuthHelper";
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

UserShema.statics = {
  async addUser(email, password) {
    password = hashPassword(password);
    const userObj = await User.create({
      email,
      password,
    });

    const user = userObj.toObject();
    delete user.password;

    return user;
  },
  async verifyUser(email, password) {
    const userObj = await User.findOne({ email });
    if (userObj) {
      const user = userObj.toObject();
      const hash = user.password;
      const isValidPassword = comparePassword(password, hash);
      if (isValidPassword) {
        delete user.password;
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
