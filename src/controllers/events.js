import Category from "../models/Category";
import Tag from "../models/Tag";
import Event from "../models/Event";

const getCategories = async (request, h) => {
  try {
    const categories = await Category.find();
    const tags = await Tag.find();
    return h.response({ success: true, categories, tags }).code(200);
  } catch (error) {
    console.error("Get categories error:", error);
    return h.response(errorData("Oops something went wrong!")).code(500);
  }
};

const getEvents = async (request, h) => {
  try {
    const { searchParam } = request.payload;
    const events = await Event.find({
      ...(searchParam && {
        $or: [
          { title: new RegExp(searchParam, "i") },
          { venue: new RegExp(searchParam, "i") },
          {
            "category.alias": new RegExp(searchParam, "i"),
          },
        ],
      }),
    }).populate([{ path: "category", select: ["name"] }]);
    return h.response({ success: true, data: events }).code(200);
  } catch (error) {
    console.error("Get events error:", error);
    return h.response(errorData("Oops something went wrong!")).code(500);
  }
};

const getEventsCategory = async (request, h) => {
  try {
    const { alias } = request.payload;
    const category = await Category.findOne({ alias: alias });
    const categoryId = category?._id.toString();
    const events = await Event.find({ category: categoryId }).populate([
      { path: "category", select: ["name"] },
    ]);
    return h.response({ success: true, data: events }).code(200);
  } catch (error) {
    console.error("Get events error:", error);
    return h.response(errorData("Oops something went wrong!")).code(500);
  }
};

const createEvent = async (request, h) => {
  try {
    const {
      title,
      venue,
      description,
      category,
      price,
      quantityOfTicketsCreated,
      type,
      currency,
      date,
      ownerId,
    } = request.payload;
    const event = await Event.create({
      title,
      venue,
      description,
      category,
      price,
      quantityOfTicketsCreated,
      type,
      currency,
      date,
      ownerId,
    });

    return h.response({ success: true, event }).code(200);
  } catch (error) {
    console.error("Get events error:", error);
    return h.response(errorData("Oops something went wrong!")).code(500);
  }
};

const deleteEvent = async (request, h) => {
  try {
    const { eventId } = request.payload;
    const result = await Event.findByIdAndDelete(eventId);
    return h.response({ success: true, data: result }).code(200);
  } catch (error) {
    console.error("Get events error:", error);
    return h.response(errorData("Oops something went wrong!")).code(500);
  }
};

const updateEvent = async (request, h) => {
  try {
    const {
      eventId,
      title,
      venue,
      description,
      category,
      price,
      quantityOfTicketsCreated,
      type,
      currency,
      date,
      ownerId,
    } = request.payload;

    console.log(
      "reer----",
      eventId,
      title,
      venue,
      description,
      category,
      price,
      quantityOfTicketsCreated,
      type,
      currency,
      date,
      ownerId
    );

    const event = await Event.findOneAndUpdate(
      { _id: eventId, ownerId },
      {
        ...(title && { title }),
        ...(venue && { venue }),
        ...(description && { description }),
        ...(category && { category }),
        ...(price && { price }),
        ...(quantityOfTicketsCreated && { quantityOfTicketsCreated }),
        ...(type && { type }),
        ...(currency && { currency }),
        ...(date && { date }),
      }
    );

    return h.response({ success: true, event }).code(200);
  } catch (error) {
    console.error("Get events error:", error);
    return h.response(errorData("Oops something went wrong!")).code(500);
  }
};

export {
  getCategories,
  getEvents,
  getEventsCategory,
  createEvent,
  deleteEvent,
  updateEvent,
};
