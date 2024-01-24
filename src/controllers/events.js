import Category from "../models/Category";
import Event from "../models/Event";

const getCategories = {
  handler: async (request, h) => {
    try {
      const categories = await Category.find({});
      return h.response({ success: true, data: categories }).code(200);
    } catch (error) {
      console.error("Get categories error:", error);
      return h.response(errorData("Oops something went wrong!")).code(500);
    }
  },
};

const getEvents = {
  handler: async (request, h) => {
    try {
      const events = await Event.find({});
      return h.response({ success: true, data: events }).code(200);
    } catch (error) {
      console.error("Get events error:", error);
      return h.response(errorData("Oops something went wrong!")).code(500);
    }
  },
};

export { getCategories, getEvents };
