import mongoose from "mongoose";

const UserShema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  { usePushEach: true, timestamps: true }
);

const User = mongoose.model("User", UserShema);

export default User;
