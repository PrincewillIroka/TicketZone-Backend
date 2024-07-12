import mongoose from "mongoose";
import { MongooseFindByReference } from "mongoose-find-by-reference";
const ObjectId = mongoose.Schema.Types.ObjectId;

const TicketShema = new mongoose.Schema(
  {
    eventId: { type: ObjectId, ref: "Event" },
    buyerId: { type: ObjectId, ref: "User" },
    labels: [],
  },
  { usePushEach: true, timestamps: true }
);

TicketShema.plugin(MongooseFindByReference);
const Ticket = mongoose.model("Ticket", TicketShema);

export default Ticket;
