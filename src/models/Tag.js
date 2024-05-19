import mongoose from "mongoose";

const TagShema = new mongoose.Schema(
  {
    name: String,
    label: String,
  },
  { usePushEach: true, timestamps: true }
);

const Tag = mongoose.model("Tag", TagShema);

export default Tag;
