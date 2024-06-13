import mongoose from "mongoose";
import { MongooseFindByReference } from "mongoose-find-by-reference";
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
    quantity: Number,
    date: String,
    currency: String,
    type: String,
  },
  { usePushEach: true, timestamps: true }
);

EventShema.plugin(MongooseFindByReference);
const Event = mongoose.model("Event", EventShema);

export default Event;
