import mongoose from "mongoose";

const CategoryShema = new mongoose.Schema(
  {
    name: String,
  },
  { usePushEach: true, timestamps: true }
);

const Category = mongoose.model("Category", CategoryShema);

export default Category;
