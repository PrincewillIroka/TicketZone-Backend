import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;

const CategoryShema = new mongoose.Schema(
  {
    name: String,
  },
  { usePushEach: true, timestamps: true }
);

const Category = mongoose.model("Category", CategoryShema);

export default Category;
