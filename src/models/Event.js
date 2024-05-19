import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;

const EventShema = new mongoose.Schema(
  {
    title: String,
    description: String,
    venue: String,
    price: String,
    category: { type: ObjectId, ref: "Category" },
    tags: [],
    images: [],
  },
  { usePushEach: true, timestamps: true }
);

const Event = mongoose.model("Event", EventShema);

export default Event;
