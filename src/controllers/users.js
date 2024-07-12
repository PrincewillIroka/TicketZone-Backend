import User from "../models/User";
import Event from "../models/Event";
import Ticket from "../models/Ticket";
import { generateUniqueTicketLabels } from "../utils";

const login = async (request, h) => {
  try {
    const { email, password } = request.payload;
    const user = await User.verifyUser(email, password);
    return h.response({ success: true, data: user }).code(200);
  } catch (error) {
    console.error(error);
    return h.response({ success: false, message: error.message }).code(500);
  }
};

const signUp = async (request, h) => {
  try {
    const { email, password } = request.payload;
    const user = await User.addUser(email, password);
    return h.response({ success: true, data: user }).code(200);
  } catch (error) {
    console.error(error);
    return h.response({ success: false, message: error.message }).code(500);
  }
};

const getUserEvents = async (request, h) => {
  try {
    const { userId, page, limit } = request.payload;
    const events = await Event.find({ ownerId: userId })
      .populate([{ path: "category", select: ["name"] }])
      .sort({
        createdAt: -1,
      })
      .limit(limit)
      .skip(limit * page)
      .lean();
    return h.response({ success: true, data: events }).code(200);
  } catch (error) {
    console.error(error);
    return h.response({ success: false, message: error.message }).code(500);
  }
};

const buyTickets = async (request, h) => {
  try {
    const { eventId, buyerId, quantityOfTicketsToBuy } = request.payload;
    let success = false;
    let data;

    const event = await Event.findById(eventId).lean();
    if (event) {
      const labels = generateUniqueTicketLabels(quantityOfTicketsToBuy);
      const tickets = await Ticket.create({ eventId, buyerId, labels });

      const { quantityOfTicketsCreated } = event;
      let quantityOfTicketsSold = quantityOfTicketsCreated - labels.length;

      await Event.findOneAndUpdate({ _id: eventId }, { quantityOfTicketsSold });

      success = true;
      data = tickets;
    }

    return h.response({ success, data }).code(200);
  } catch (error) {
    console.error(error);
    return h.response({ success: false, message: error.message }).code(500);
  }
};

export { login, signUp, getUserEvents, buyTickets };
